const express = require("express");
const router = express.Router();
const { create, getAll, deleteTask } = require("../controllers/taskController");

router.post("/", create).get("/", getAll).delete("/:id", deleteTask);

module.exports = router;
