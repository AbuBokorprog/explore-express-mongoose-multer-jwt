const express = require("express");
const dashboard = require("./dashboard");

const adminRouter = express.Router();

adminRouter.get("/", (req, res) => {
  res.send("This is an admin");
});

adminRouter.use(dashboard);

module.exports = adminRouter;
