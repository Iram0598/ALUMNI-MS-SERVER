const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/e-comm");

const ProductSch = new mongoose.Schema({
  name: String,
  model: String,
  price: Number,
});

//Insert data into DB
const insertDB = async () => {
  const ProductsModel = mongoose.model("products", ProductSch);
  let data = new ProductsModel({ name: "m8", model: "Tesla", price: 122 });
  let result = await data.save();
  console.log(result);
};

insertDB();

//Update data into DB
const updateDB = async () => {
  const Products = mongoose.model("products", ProductSch);
  let data = await Products.updateOne(
    { name: "mustafa" },
    { $set: { price: 700 } }
  );
  console.log(data);
};

updateDB();

//Delete data from DB

const deleteDB = async () => {
  const Products = mongoose.model("products", ProductSch);
  let data = await Products.deleteOne({ name: "mustafa" });
  console.log(data);
};

deleteDB();

//Find data from DB
const findDB = async () => {
  const Products = mongoose.model("products", ProductSch);
  let data = await Products.find({ name: "Iram udoy" });
  console.log(data);
};

findDB();
