// A configuration file that reads from the environment variables

// Dotenv
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });

// Export config variables
module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  url: process.env.URL,
  token: process.env.TOKEN
};
