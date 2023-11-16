const Task = require("../models/task");

const create = async (req, res) => {
  try {
    const task = new Task(req.body);
    const createdTask = await task.save();
    return res.status(201).json(createdTask);
  } catch (err) {
    return res.status(400).json({
      error: JSON.stringify(err),
    });
  }
};

const getAll = async (_req, res) => {
  try {
    const tasks = await Task.find();
    return res.status(200).json(tasks);
  } catch (err) {
    return res.status(400).json({
      error: JSON.stringify(err),
    });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res.status(400).json({ error: "Invalid task id" });
    } else {
      return res.status(204).json();
    }
  } catch (err) {
    return res.status(400).json({
      error: JSON.stringify(err),
    });
  }
};

module.exports = {
  create,
  getAll,
  deleteTask,
};
