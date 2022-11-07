const dbConnect = require("./mongo");

const deleteData = async () => {
  let data = await dbConnect();
  let result = await data.deleteOne({
    name: "Realme",
  });
  console.log(result);
};

deleteData();
