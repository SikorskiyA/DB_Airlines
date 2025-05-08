const express = require("express");
const api = require("../controllers/api.js");

const apiRouter = express.Router();

apiRouter.get("/api/:countryCode", api.filterCities);

apiRouter.use('/:countryCode', api.filterCities);

module.exports = apiRouter;