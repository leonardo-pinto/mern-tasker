const express = require("express");
const { login, register } = require("../controllers/authController");
const router = express.Router();
const{ validateLogin, validateRegister} = require("../middlewares/auth")
router
    .post("/login", validateLogin, login)
    .post("/register", validateRegister, register);

module.exports = router;
