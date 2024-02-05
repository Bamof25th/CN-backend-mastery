// imports
import express from "express";
import UserController from "./user.controller.js";

//  using express-router
const usersRouter = express.Router();
//inatnce of controller
const userController = new UserController();
// Routes
usersRouter.post("/signup", (req, res) => {
  userController.signUp(req, res);
});
usersRouter.post("/signin", (req, res) => {
  userController.signIn(req, res);
});

export default usersRouter;
