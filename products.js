const mongoose = require("mongoose");

const ProductSch = new mongoose.Schema({
    name: String,
    model: String,
    price: Number,
  });



module.exports = mongoose.model('products', ProductSch)

  