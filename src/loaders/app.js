const express = require("express");
const app = express();

const getResearchs = require('../api/research/router');
// App Error
const {AppError, geh} = require("../utils/appError");


app.use(express.json());
app.use(express.static("src/public"));
app.set('view engine', 'ejs');

app.use('/', getResearchs);


// Handle URL which don't exist
app.use("*", (req, res, next) => {
    return next(
      new AppError(
        `Unknown URL - ${req.protocol}://${req.get("host")}${req.originalUrl}`,
        404
      )
    );
});
  
// Use GEH
app.use(geh);

module.exports = app;