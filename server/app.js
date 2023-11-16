const express = require("express");
const cors = require("cors");
// const taskController = require("./routes/taskRoutes");
// const authController = require("./routes/authRoutes");
const app = express();

app.use(cors());
app.use(express.json());
// app.use("/api/auth", authController);
// app.use("/api/task", taskController);

module.exports = app;
