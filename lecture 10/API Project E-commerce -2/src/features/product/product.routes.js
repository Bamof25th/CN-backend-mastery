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
productRouter.get("/filter", productController.filterProducts);
// localhost:3000/api/products
productRouter.get("/", productController.getAllProduct);
productRouter.post(
  "/",
  upload.single("imageUrl"),
  productController.addProduct
);
// router.get("/" , productControler.rateProduct);
productRouter.get("/:id", productController.getOneProduct);

export default productRouter;
