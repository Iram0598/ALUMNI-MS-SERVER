const dbConnect = require("./mongo");

const updateData = async () => {
  let data = await dbConnect();
  let result = data.update(
    {
      name: "Samsung",
    },
    {
      $set: { name: "Symphony" },
    }
  );
  if (result.acknowledgement) {
    console.log("Data updated successfully!!");
  }
  console.log(result);
};

updateData();
