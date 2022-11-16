const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({

    name: String,
    studentid: String,
    program: String,
    gender: String,
    admissionyear: String,
    presentaddress: String,
    permanentaddress: String,
    organization: String,
    department: String,
    designation: String,
    o_type: String,
    joiningdate: String,
    o_address: String

});

module.exports = mongoose.model("profiles", profileSchema)