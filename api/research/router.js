const Researches = require('./controller');
const express = require("express");
const router = express.Router();

router.get('/results',Researches.getsingleResearch)

router.get('/alls',Researches.getAllResearchs)


module.exports = router;
