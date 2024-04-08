const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

app.set("view engine", "ejs");

// Define a route to render an EJS template
app.get("/", (req, res) => {
  const data = {
    title: "Welcome to my Express App!",
    message: "This is a dynamic message rendered using EJS.",
  };
  res.render("pages/home", data); // Renders the 'index.ejs' template with the provided data
});
app.post("/", (req, res) => {
  console.log(req.body);
  res.send("Home page post request");
});

app.listen(port, () => {
  console.log("listening on port 5000");
});
