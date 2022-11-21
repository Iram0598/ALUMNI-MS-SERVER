const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/AMS")
.then(() => {
    console.log('MongoDB connected!!')
  })
  .catch(err => {
    console.log('Failed to connect to MongoDB', err)
  })