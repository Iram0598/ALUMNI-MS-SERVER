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
  console.log(req.body)
  let users = User(req.body);
  let result = await users.save();

 

  let user1 = Profile({ studentid: req.body.studentid });
  let result2 = await user1.save();

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

// Image upload
// const storage = multer.diskStorage({
//   destination: './upload/images',
//   filename: (req, file, cb) =>{
//     return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
//   }
// })

// const upload = multer({
//   storage: storage,
//   limits: {
//     fileSize: 10
// }
  
// });

// app.use('/profile', express.static('upload/images'));

// app.post("/upload", upload.single('profile'), (req, res) => {
//   res.json({
//     success: 1,
//     profile_url: `http://localhost:5000/profile/${req.file.filename}`
// })
// });

// function errHandler(err, req, res, next) {
//   if (err instanceof multer.MulterError) {
//       res.json({
//           success: 0,
//           message: err.message
//       })
//   }
// }
// app.use(errHandler);

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
      { name: { $regex: req.params.key } },
      { organization: { $regex: req.params.key } },
      { o_type: { $regex: req.params.key } },
      { studentid: { $regex: req.params.key } }
      
    ],
  });
  res.send(data);
});

app.get('/api/sorted_items', (req, res) => {
  Item.find({}, null, { sort: { name: 1 } }, (err, items) => {
      if (err) {
          res.status(500).send(err);
      } else {
          res.send(items);
      }
  });
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

app.delete("/jobDelete/:id", async (req, res) => {
  console.log(req.params);
  const data = await Job.deleteOne({ _id: req.params.id });
  res.send(data);
});

app.put("/jobUpdate/:id", async (req, res) => {
  console.log(req.params);
  let data = await Job.updateOne(
    { _id: req.params.id },
    { $set: req.body }
  );
  res.send(data);
});

app.get("/jobs/:id", async (req, res) => {
  const job = await Job.findOne({ _id: req.params.id });
  if (job) {
    res.send(job);
  } else {
    res.send({ result: "No record found" });
  }
});

app.listen(5000);
