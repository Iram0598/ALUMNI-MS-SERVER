const express = require("express");
const app = express();


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/profile", (req, res) => {
  res.send("This is profile");
});
app.get("/alumni", (req, res) => {
  res.send("Alumni page");
});
app.listen(5000, () => {
  console.log(`Example app listening on port ${5000}`);
});
