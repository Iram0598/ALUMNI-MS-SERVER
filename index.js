const express = require("express");
const multer = require("multer");

require("./config");

const Products = require("./products");

const app = express();

app.use(express.json());

app.post("/create", async (req, res) => {
  let data = new Products(req.body);
  let result = await data.save();
  console.log(req.body);
  res.send(result);
});

app.get("/find", async (req, res) => {
  let data = await Products.find();
  res.send(data);
});

app.delete("/delete/:_id", async (req, res) => {
  console.log(req.params);
  let data = await Products.deleteOne(req.params);
  res.send(data);
});

app.put("/update/:_id", async (req, res) => {
  console.log(req.params);
  let data = await Products.updateOne(req.params, {
    $set: req.body,
  });
  res.send(data);
});

app.get("/search/:key", async (req, res) => {
  console.log(req.params.key);
  let data = await Products.find({
    $or: [{ name: { $regex: req.params.key } }],
  });
  res.send(data);
});

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "uploads");
    },

    filename: function (req, file, cb) {
      cb(null, file.fieldname + "-" + Date.now() + ".jpg");
    },
  }),
}).single("user_file");

app.post("/upload", upload, (req, res) => {
  res.send("file uploaded");
});

app.listen(5000);
