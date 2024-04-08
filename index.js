const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome");
});
app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Home page post request");
});

app.listen(port, () => {
  console.log("listening on port 5000");
});
