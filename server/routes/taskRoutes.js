const express = require("express");
const router = express.Router();
const { create } = require("../controllers/taskController");

router.post("/", create);

module.exports = router;