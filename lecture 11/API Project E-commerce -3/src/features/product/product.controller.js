import { query } from "express";
import ProductModel from "./product.model.js";

export default class ProductController {
  getAllProduct(req, res) {
    const products = ProductModel.getAll();
    res.status(200).send(products);
  }

  addProduct(req, res) {
    const { name, price, sizes } = req.body;

    const newProduct = {
      name,
      price: parseFloat(price),
      sizes: sizes.split(","),
      imageUrl: req.file.filename,
    };
    const createdRecord = ProductModel.add(newProduct);

    res.status(201).send(createdRecord);
  }

  rateProduct(req, res) {
    const userID = req.query.userID;
    const productId = req.query.productID;
    const rating = req.query.rating;

    try {
      ProductModel.rateProduct(userID, productId, rating);
    } catch (error) {
      return res.status(400).send(error.message);
    }
    return res.status(200).send({ message: "Rating added successfully" });
  }

  getOneProduct(req, res) {
    const id = req.params.id;
    const product = ProductModel.get(id);
    if (!product) {
      res.status(400).send("Product not found.");
    } else {
      return res.status(201).send(product);
    }
  }

  filterProducts(req, res) {
    const minPrice = req.query.minPrice;
    const maxPrice = req.query.maxPrice;
    const category = req.query.category;

    const result = ProductModel.filter(minPrice, maxPrice, category);
    console.log(result);
    res.status(200).send(result);
  }
}
