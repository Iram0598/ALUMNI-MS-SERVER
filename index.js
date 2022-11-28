const express = require("express");
const cors = require("cors");

require("./db/config");
const User = require("./db/User");
const Event = require("./db/Event");
const Profile = require("./db/Profile");
const Job = require("./db/Job")
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

  let user1 = Profile({ studentid: req.body.studentid });
  let result2 = await user1.save();

  res.send("Data saved");
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
  const event = await Event.findOne({ _id: req.params.id });
  if (event) {
    res.send(event);
  } else {
    res.send({ result: "No record found" });
  }
});

// app.get("/find", async (req, res) => {
//   let data = await Products.find();
//   res.send(data);
// });

app.delete("/eventDelete/:id", async (req, res) => {
  console.log(req.params);
  const data = await Event.deleteOne({ _id: req.params.id });
  res.send(data);
});

app.put("/eventUpdate/:id", async (req, res) => {
  console.log(req.params);
  let data = await Event.updateOne({ _id: req.params.id }, { $set: req.body });
  res.send(data);
});

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

//profile controller

app.post("/addProfiledata", async (req, res) => {
  let profiles = Profile(req.body);
  let result = await profiles.save();
  res.send(result);
});

app.get("/getProfiledata", async (req, res) => {
  const profiles = await Profile.find();
  if (profiles.length > 0) {
    res.send(profiles);
  } else {
    res.send({ result: "No data found" });
  }
});

app.get("/profile/:id", async (req, res) => {
  const profiles = await Profile.findOne({ _id: req.params.id });
  if (profiles) {
    res.send(profiles);
  } else {
    res.send({ result: "No record found" });
  }
});

app.put("/profileUpdate/:id", async (req, res) => {
  console.log(req.params);
  let data = await Profile.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(data);
});

app.get("/search/:key", async (req, res) => {
  console.log(req.params.key);
  let data = await Profile.find({
    $or: [
      { name: { $regex: req.params.key } }
      
    ],
  });
  res.send(data);
});


//Job controller

app.post("/addJob", async (req, res) => {
  let jobs = Job(req.body);
  let result = await jobs.save();
  res.send(result);
});

app.get("/getJob", async (req, res) => {
  const job = await Job.find();
  if (job.length > 0) {
    res.send(job);
  } else {
    res.send({ result: "No event found" });
  }
});

app.listen(5000);
