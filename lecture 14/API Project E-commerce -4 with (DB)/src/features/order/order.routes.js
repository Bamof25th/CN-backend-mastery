import express from "express";
import OrderController from "./order.controller.js";

const orderRouters = express.Router();
const ordercController = new OrderController();

orderRouters.post("/", (req, res, next) => {
  ordercController.placeOrder(req, res, next);
});

export default orderRouters;
