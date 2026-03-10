const express = require("express");
const app = express();

app.use(express.json());

// Health check route (Render uses this to verify app is live)
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Server is running",
    timestamp: new Date().toISOString(),
  });
});

// Base route
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my Node.js API 🚀",
    version: "1.0.0",
  });
});

// Example API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello, World! changed againnn!!!!" });
});

module.exports = app;
