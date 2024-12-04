const express = require("express");
const routeController = require("../controllers/routeController.js");

const routeRouter = express.Router();


routeRouter.use("/addRoute", routeController.addRoute);
routeRouter.use("/postAddRoute", routeController.postAddRoute);

routeRouter.post("/search", routeController.search);

routeRouter.use("/editRoute/:RouteId", routeController.editRoute);
routeRouter.use("/postEditRoute", routeController.postEditRoute);

routeRouter.use("/deleteRoute/:RouteId", routeController.deleteRoute);


routeRouter.use("/buy/:RouteId", routeController.buy);




routeRouter.use("/", routeController.getRoutes);

module.exports = routeRouter;


