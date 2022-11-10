const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({

    title: String,
    description: String,
    coverphoto: String,
    eventdate: String

});

module.exports = mongoose.model("events", eventSchema)