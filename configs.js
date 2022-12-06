// A configuration file that reads from the environment variables

// Dotenv
const dotenv = require("dotenv");
dotenv.config({ path: "config.env" });

// Export config variables
module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.port,
  url: process.env.url,
  token: process.env.token,
};
