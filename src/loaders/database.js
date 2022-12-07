// Start the DB or Connect with the DB

// Mongoose
const mongoose = require("mongoose");

// Configs
const configs = require("../../configs");

// Connect with DB

module.exports = async()=>{
  await mongoose
  .connect(configs.url)
  .then((conn) => {
    console.log(`Successfully Connected`);
  })
  .catch((err) => {
    console.log(`Error while connecting to DB`);
    console.log(err);
  });
}