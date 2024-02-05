import express from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import ProductController from "./controllers/productController.js";
import ProductModel from "./models/ProductModel.js";
const productController = new ProductController();
const productModel = new ProductModel();
const app = express();

app.use(expressEjsLayouts);
app.set("view engine", "ejs");
app.set("views", path.resolve("views"));
app.use(express.urlencoded({ extended: true }));

//GET Routes
app.get("/",productController.index);

//POST Routes
app.post("/search", productController.search);

export default app;
