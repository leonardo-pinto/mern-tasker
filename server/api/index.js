const express = require("express");
const cors = require("cors");
const connectServer = require("../server");
const taskRoutes = require("../routes/taskRoutes");
const authRoutes = require("../routes/authRoutes");
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/task", taskRoutes);
app.use("/api/auth", authRoutes);

connectServer(app);

module.exports = app;