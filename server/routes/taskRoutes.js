const express = require("express");
const router = express.Router();
const {
  create,
  getAll,
  deleteTask,
  update,
} = require("../controllers/taskController");

router
  .post("/", create)
  .get("/", getAll)
  .delete("/:id", deleteTask)
  .put("/:id", update);

module.exports = router;
