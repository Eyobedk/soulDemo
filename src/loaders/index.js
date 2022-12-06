const express = require("express");
// Http
const http = require("http");

const bot = require("./bot");
const app = require('./app');
const database =require('./database');
const configs = require('../configs')


// Igniter function
module.exports = async() => {
  // Server
  const server = http.createServer(app);

  // Port
  const port = configs.port || 5000;

  // Listen
  server.listen(port, () => {
    console.log(`Listening on ${port}...`);
  });

  await database();

  await bot.main();
};
