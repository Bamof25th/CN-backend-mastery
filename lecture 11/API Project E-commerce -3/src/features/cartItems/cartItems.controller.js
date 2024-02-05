import CartItemModel from "./cartItems.model.js";


export default class CartItemController {
  add(req, res) {
    const { productID, quantity } = req.query;
    const userID = req.userID;

    const itemAdded = CartItemModel.add(productID, userID, quantity);
    if (!itemAdded) {
      res.status(401).send("Item not available");
    }
    res.status(201).send("Cart is updated");
  }

  get(req, res) {
    const userID = req.userID;
    const items = CartItemModel.get(userID);

    return res.status(200).send(items);
  }

  delete(req, res) {
    const userID = req.userID;
    const cartItemID = req.params.id;

    const error = CartItemModel.delete(cartItemID, userID);

    if (error) {
      return res.status(404).send(error);
    } else {
      return res.status(201).send("Item removed from your cart");
    }
  }
}
