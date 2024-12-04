const express = require("express");
const saleController = require("../controllers/saleController.js");

const saleRouter = express.Router();

saleRouter.use("/addToCart/:RouteId", saleController.addToCart);
saleRouter.use("/getCart", saleController.getCart);

saleRouter.use("/cartToHistory", saleController.cartToHistory);

saleRouter.use("/getHistory/:ClientId", saleController.getHistory);

module.exports = saleRouter;


