import CartItemModel from "./cartItems.model.js";
import CartitemRepository from "./cartItem.repository.js";
import ApplicationError from "../../errorHandler/applicationError.js";

export default class CartItemController {
  constructor() {
    this.cartitemRepository = new CartitemRepository();
  }
  async add(req, res) {
    try {
      const { productID, quantity } = req.body;
      const userID = req.userID;

      const itemAdded = await this.cartitemRepository.add(
        productID,
        userID,
        quantity
      );
      res.status(201).send("Cart is updated");
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something Went Wrong ", 500);
    }
  }

  async get(req, res) {
    try {
      const userID = req.userID;
      const items = await this.cartitemRepository.get(userID);

      return res.status(200).send(items);
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something Went Wrong ", 500);
    }
  }

  async delete(req, res) {
    try {
      const userID = req.userID;
      const cartItemID = req.params.id;

      const isDeleted = await this.cartitemRepository.delete(
        userID,
        cartItemID
      );

      if (!isDeleted) {
        return res.status(404).send("Item not found");
      } else {
        return res.status(201).send("Item removed from your cart");
      }
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something Went Wrong ", 500);
    }
  }
}
