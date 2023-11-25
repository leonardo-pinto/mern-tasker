const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TaskSchema = new Schema({
  userId: String,
  title: String,
  description: String,
  status: String,
  date: String,
});

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
