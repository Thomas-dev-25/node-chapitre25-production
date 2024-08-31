const mongoose = require("mongoose");
const env = require(`../environment/${process.env.NODE_ENV}`);

mongoose
  .connect(env.dbUrl)
  .then(() => {
    console.log("Connection db Ok !");
  })
  .catch((err) => {
    console.log(err);
  });
