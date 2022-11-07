const dbConnect = require("./mongo");

const insertData = async () => {
  let data = await dbConnect();
  let result = await data.insertOne({
    name: "note 5",
    model: "xiaomi",
    price: 400,
  });
    console.log(result)
  if (result.acknowledged) {
    console.log("Data inserted successfully!!");
  }
};

insertData();
