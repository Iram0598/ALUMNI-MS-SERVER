const dbConnect = require("./mongo");

// dbConnect().then((res) => {
//   res
//     .find({ name: "Nokia" })
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });

const main = async () => {
  let data = await dbConnect();
  data = await data.find({ name: "Nokia" }).toArray();
  console.log(data);
};

main();
