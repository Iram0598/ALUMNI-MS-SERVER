const dbConnect = require("./mongo");
const express = require("express");
const mongodb = require("mongodb");
const app = express();

app.use(express.json());
app.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  res.send(data);
});

app.post("/", async (req, res) => {
  let data = await dbConnect();
  let result = await data.insertOne(req.body);
  res.send(result);
});

app.put("/", async (req, res) => {
  console.log(req.body);
  const data = await dbConnect();
  let result = await data.updateOne(
    { name: req.body.name },
    { $set: req.body }
  );
  res.send(result);
});

app.delete("/:id", async (req, res) => {
  const data = await dbConnect();
  const result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  res.send(result);
});

app.listen(5000);
