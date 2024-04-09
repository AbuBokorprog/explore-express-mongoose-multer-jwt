const express = require("express");
const app = express();
const port = 5000;

// app.use((req, res, next) => {
//   throw new Error("This is a Test error");
// });

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.message);
//   res.status(500).send("Error: " + err.message);
// });

// Route
app.get("/", (req, res) => {
  res.send("This is home page get method");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Home page post request");
});

app.listen(port, () => {
  console.log("listening on port 5000");
});
