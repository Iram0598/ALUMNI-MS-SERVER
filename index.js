const express = require("express");
const app = express();
const path = require("path")

const publicPath = path.join(__dirname, 'public')


app.get("", (_, res) => {
 res.sendFile(`${publicPath}/index.html`)
});

app.get("/alumni", (_, res) => {
  res.sendFile(`${publicPath}/alumni.html`)
 });

app.get("/profile", (req, res) => {
  res.send(`<h1>Hello friend</h1>
  <input type="text" placeholder="Enter text" >
  <button type="button">Click</button> 
  `);
});
app.get("/alumni", (req, res) => {
  res.send([
    {
      name: "udoy",
      email: "udoy@gmail.com"
    },
    {
      name: "bappi",
      email: "bappi@gmail.com"
    }
  ]);
});
app.listen(5000, () => {
  console.log(`Example app listening on port ${5000}`);
});
