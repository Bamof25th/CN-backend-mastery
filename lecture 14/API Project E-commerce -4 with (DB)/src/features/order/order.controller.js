import ApplicationError from "../../errorHandler/applicationError.js";
import OrderRepository from "./order.repository.js";

export default class OrderController {
  constructor() {
    this.orderRepository = new OrderRepository();
  }

  async placeOrder(req, res, next) {
    try {
      const userId = req.userID;
      // console.log(userId)
      await this.orderRepository.placeOrder(userId);
      res.status(200).send("order created");
    } catch (err) {
      console.log(err);
      res.send("something went wrong")
      throw new ApplicationError("Something Went Wrong ", 500);
    }
  }
}
