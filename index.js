const express = require("express");
const cors = require("cors");

require("./db/config");
const User = require("./db/User");
const Event = require("./db/Event");

require("./db/config");

const app = express();

// const multer = require("multer");

// require("./config");

// const Products = require("./products");

// app.use(express.json());
app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  let users = User(req.body);
  let result = await users.save();
  res.send(result);
});

app.post("/addEvent", async (req, res) => {
  let events = Event(req.body);
  let result = await events.save();
  res.send(result);
});

app.get("/getEvent", async (req, res) => {
  const event = await Event.find();
  if (event.length > 0) {
    res.send(event);
  } else {
    res.send({ result: "No event found" });
  }
});

app.get("/events/:id", async (req, res) => {
  const eventid = req.params.id;
  console.log(eventid);
  const event = await Event.findById(eventid);
  if(event)
  {
    res.send(event)
  }
  else{
    res.send({result: "No event found"});
  }
});

// app.get("/find", async (req, res) => {
//   let data = await Products.find();
//   res.send(data);
// });

app.delete("/eventDelete/:id", async (req, res) => {
  console.log(req.params);
  const  data = await Event.deleteOne({_id: req.params.id});
  res.send(data);
});

// app.put("/update/:_id", async (req, res) => {
//   console.log(req.params);
//   let data = await Products.updateOne(req.params, {
//     $set: req.body,
//   });
//   res.send(data);
// });

// app.get("/search/:key", async (req, res) => {
//   console.log(req.params.key);
//   let data = await Products.find({
//     $or: [{ name: { $regex: req.params.key } }],
//   });
//   res.send(data);
// });

// const upload = multer({
//   storage: multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "uploads");
//     },

//     filename: function (req, file, cb) {
//       cb(null, file.fieldname + "-" + Date.now() + ".jpg");
//     },
//   }),
// }).single("user_file");

// app.post("/upload", upload, (req, res) => {
//   res.send("file uploaded");
// });

app.listen(5000);
