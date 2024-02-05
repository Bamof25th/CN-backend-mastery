// Manage Routes/Paths to produtController

// 1. import express

import express from "express";
import { upload } from "../../middleware/fileUpload.middleware.js";
import ProductController from "./product.controller.js";

// 2. inintalise express router / GET Router

const productRouter = express.Router();

const productController = new ProductController(); //instansiate

// All the paths to controller methods

// localhost:3000/api/products/filter?minPrice=10&maxPrice=20&category=Category1
productRouter.get("/filter", (req, res) => {
  productController.filterProducts(req, res);
});
// localhost:3000/api/products
productRouter.get("/", (req, res) => {
  productController.getAllProduct(req, res);
});
productRouter.post("/", upload.single("imageUrl"), (req, res) => {
  productController.addProduct(req, res);
});
productRouter.post("/rate", (req, res) => {
  productController.rateProduct(req, res);
});
productRouter.get("/avgPrice", (req, res, next) => {
  productController.avgPrice(req, res);
});
productRouter.get("/:id", (req, res) => {
  productController.getOneProduct(req, res);
});

export default productRouter;
