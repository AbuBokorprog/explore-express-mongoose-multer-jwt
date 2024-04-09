const express = require("express");

const dashboard = express.Router();

dashboard.get("/dashboard", (req, res) => {
  res.send("This is a dashboard");
});

module.exports = dashboard;
