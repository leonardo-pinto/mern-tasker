const jwt = require("jsonwebtoken");
const { config } = require("../config");
const { body, validationResult } = require("express-validator");

exports.validateToken = async (req, res, next) => {
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

exports.validateRegister = [
  body("username")
    .isLength(6)
    .withMessage("Username should have at least six characters"),
  body("password")
    .isLength(6)
    .withMessage("Password should have at least six characters"),
  body("email").isEmail().withMessage("Email format is invalid"),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    } else {
      next();
    }
  },
];

exports.validateLogin = [
  body("username")
    .isLength(6)
    .withMessage("Username should have at least six characters"),
  body("password")
    .isLength(6)
    .withMessage("Password should have at least six characters"),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    } else {
      next();
    }
  },
];