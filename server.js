const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const roomRoutes = require("./routes/roomRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/", roomRoutes);

// Start Server
app.listen(process.env.BE_PORT, () => {
  console.log(`Server listening on port ${process.env.BE_PORT}`);
});
