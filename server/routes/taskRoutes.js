const express = require("express");
const router = express.Router();
const {
  create,
  getAll,
  deleteTask,
  update,
} = require("../controllers/taskController");
const { validateToken, validateTask } = require("../middlewares/");
router
  .post("/", validateToken, validateTask, create)
  .get("/", validateToken, getAll)
  .delete("/:id", validateToken, deleteTask)
  .put("/:id", validateToken, validateTask, update);

module.exports = router;
