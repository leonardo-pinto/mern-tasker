const express = require("express");
const router = express.Router();
const { create, getAll } = require("../controllers/taskController");

router.post("/", create).get("/", getAll);

module.exports = router;
