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
    return res.status(201).json(tasks);
  } catch (err) {
    return res.status(400).json({
      error: JSON.stringify(err),
    });
  }
};

module.exports = {
  create,
  getAll,
};
