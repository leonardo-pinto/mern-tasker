const express = require("express");
const router = express.Router();
const {
  create,
  getAll,
  deleteTask,
  update,
} = require("../controllers/taskController");
const { validateToken } = require("../middlewares/auth");

router
  .post("/", validateToken, create)
  .get("/", validateToken, getAll)
  .delete("/:id", validateToken, deleteTask)
  .put("/:id", validateToken, update);

module.exports = router;
