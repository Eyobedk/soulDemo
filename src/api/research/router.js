const Researches = require('./controller');
const express = require("express");
const router = express.Router();

router.get('/',Researches.getsingleResearch)

router.get('/alls',Researches.getAllResearchs)


module.exports = router;
