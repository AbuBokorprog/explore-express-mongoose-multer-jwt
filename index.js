const express = require("express");
const adminRouter = require("./Admin/index");
const app = express();

const port = 5000;

// app.use("/", publicRoute);

app.use("/admin", adminRouter);

app.use((req, res, next) => {
  // res.status(404).send("Request url is not found");
  next("Request url is not found");
});

app.use((err, req, res, next) => {
  if (err.message) {
    res.status(500).send(err.message);
  } else {
    res.send("There was an error");
  }
});

app.listen(port, () => {
  console.log("listening on port 5000");
});
