import ProductModel from "./product.model.js";
import ProductRepository from "./product.repository.js";
import ApplicationError from "../../errorHandler/applicationError.js";

export default class ProductController {
  constructor() {
    this.productRepository = new ProductRepository();
  }

  async getAllProduct(req, res) {
    try {
      const products = await this.productRepository.getAll();
      res.status(200).send(products);
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something Went Wrong ", 500);
    }
  }

  async addProduct(req, res) {
    try {
      console.log(req.body);
      const { name, price, sizes, categories } = req.body;
      const newProduct = new ProductModel(
        name,
        null,
        parseFloat(price),
        null,
        categories,
        sizes.split(",")
      );
      const createdProduct = await this.productRepository.add(newProduct);
      res.status(201).send(createdProduct);
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something Went Wrong With DataBase", 500);
    }
  }

  async rateProduct(req, res) {
    try {
      const userID = req.userID;
      const productID = req.body.productID;
      const rating = req.body.rating;

      await this.productRepository.rateProduct(userID, productID, rating);
    } catch (error) {
      return res.status(400).send(error.message);
    }
    return res.status(200).send({ message: "Rating added successfully" });
  }

  async getOneProduct(req, res) {
    try {
      const id = req.params.id;
      const product = await this.productRepository.get(id);
      if (!product) {
        res.status(400).send("Product not found.");
      } else {
        return res.status(201).send(product);
      }
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something Went Wrong With DataBase", 500);
    }
  }

  async filterProducts(req, res) {
    try {
      const minPrice = req.query.minPrice;
      // const maxPrice = req.query.maxPrice;
      const categories = req.query.categories;

      const result = await this.productRepository.filter(minPrice, categories);
      // console.log(result);
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something Went Wrong With DataBase", 500);
    }
  }

  async avgPrice(req, res, next) {
    try {
      const result = await this.productRepository.avgProductPriceCategory();
      console.log(result);
      res.status(200).send(result);
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something Went Wrong With DataBase", 500);
    }
  }
}
