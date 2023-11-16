const Task = require("../models/task");

const create = async (req, res) => {
  const task = new Task(req.body);
  try {
    const createdTask = await task.save();
    return res.status(201).json(createdTask);
  } catch (err) {
    return res.status(400).json({
      error: JSON.stringify(err),
    });
  }
};

module.exports = {
  create,
};
