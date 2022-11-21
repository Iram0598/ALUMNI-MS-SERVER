const mongoose = require("mongoose")

const jobSchema = new mongoose.Schema({

    job_title: String,
    job_des: String,
    job_photo: String,
    eventdate: String,
    regfee: String,
    location: String

});

module.exports = mongoose.model("jobs", jobSchema)