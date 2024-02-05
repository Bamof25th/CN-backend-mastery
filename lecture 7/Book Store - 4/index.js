import express from "express";
import ProductController from "./src/controllers/product.controller.js";
import EjsLayouts from "express-ejs-layouts";
import path from "path";
import addProductValidateMiddleware from "./src/middlewares/validation.middleware.js";
import { uploadFile } from "./src/middlewares/file-upload.middleware.js";
import UserController from "./src/controllers/user.controller.js";
import session from "express-session";
import { auth } from "./src/middlewares/auth.middileware.js";
import cookieParser from "cookie-parser";
import { setLastVisit } from "./src/middlewares/lastIVsit.middleware.js";

const server = express();

// Using cookie-parser Middleware
server.use(cookieParser());
// server.use(setLastVisit);

// Using express-sesssion middleware(as) 

server.use(
  session({
    secret: "SecretKey",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// main.js publically exposed
server.use(express.static("public"));

// parse form data - instruct to encode the data
server.use(express.urlencoded({ extended: true }));

//Setup view engine Settings
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

// express-ejs-layout as a middleware
server.use(EjsLayouts);

// create an instance of ProductContrller and UserController
const usersController = new UserController();
const productController = new ProductController();

server.get("/", auth, setLastVisit, productController.getProduct);
server.get("/add-product", auth, productController.getAddForm);
server.get("/update-product/:id", auth, productController.getUpdateProductView);

// Sign up and LogIn pages for users
server.get("/register", usersController.getRegister);
server.get("/login", usersController.getLogin);

// logOut route 
server.get("/logout", usersController.logout);
// after registration
server.post("/login", usersController.postLogin);
server.post("/register", usersController.postRegister);

// DELETE Product
server.post("/delete-product/:id", auth, productController.deleteProduct);

// product VALIDATION Middleware
server.post(
  "/",
  auth,
  uploadFile.single("imageUrl"),
  addProductValidateMiddleware,
  productController.addNewProduct
);
server.post("/update-product", auth, productController.postUpdateProduct);

server.use(express.static("src/views")); // provides spath for ejs files in views

server.listen(3400);

console.log("Listining to 3400");
