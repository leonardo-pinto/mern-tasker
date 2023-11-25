const jwt = require("jsonwebtoken");
const { config } = require("../config");

const validateToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Invalid access token" });
    }
    const { _id } = jwt.verify(token, config.jwtSecret);
    req.body.userId = _id;
    next();
  } catch (error) {
    return res.status(400).json({ error: "Access token format is not valid" });
  }
};

module.exports = {
  validateToken,
};
