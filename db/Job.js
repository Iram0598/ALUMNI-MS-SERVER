const mongoose = require("mongoose")

const jobSchema = new mongoose.Schema({

    job_title: String,
    organization_name: String,
    job_des: String,
    job_photo: String,
    job_resp: String,
    empt_stat: String,
    workplace: String,
    edu_req: String,
    job_location: String,
    salary: String,
    compensation: String,
    app_deadline: String,
    published_date: String,
    vacancy: String,
   

});

module.exports = mongoose.model("jobs", jobSchema)