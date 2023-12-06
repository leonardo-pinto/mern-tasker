const User = require("../models/user");
const jwt = require("jsonwebtoken");
const { config } = require("../config");

const userExists = async (username, email) => {
  const user = await User.find({
    $or: [{ email: email }, { username: username }],
  });
  return !!user.length;
};

const register = async (req, res) => {
  try {
    const user = new User(req.body);
    const userExist = await userExists(req.body.username, req.body.email);
    if (userExist) {
      return res
        .status(400)
        .json({ error: "Email or username is already registered" });
    }
    const createdUser = await user.save();

    const token = jwt.sign({ _id: createdUser._id }, config.jwtSecret, {
      expiresIn: "3h",
    });

    return res.status(201).json({
      accessToken: token,
      username: createdUser.username,
    });
  } catch (err) {
    return res.status(400).json({
      error: JSON.stringify(err),
    });
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }
    if (!user.authenticate(req.body.password)) {
      return res.status(401).send({ error: "Invalid password" });
    }

    const token = jwt.sign({ _id: user._id }, config.jwtSecret, {
      expiresIn: "3h",
    });

    return res.status(201).json({
      accessToken: token,
      username: req.body.username,
    });
  } catch (error) {
    return res.status(400).json({
      error: JSON.stringify(error),
    });
  }
};

module.exports = {
  login,
  register,
};
