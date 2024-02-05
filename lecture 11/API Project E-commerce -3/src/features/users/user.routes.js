// imports
import express from "express";
import UserController from "./user.controller.js";

//  using express-router
const usersRouter = express.Router();
//inatnce of controller
const userController = new UserController();
// Routes
usersRouter.post("/signup", userController.signUp);
usersRouter.post("/signin", userController.signIn);


export default usersRouter;
