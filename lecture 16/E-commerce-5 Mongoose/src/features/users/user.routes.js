// imports
import express from "express";
import UserController from "./user.controller.js";
import jwtAuth from "../../middleware/jwtAuth.middileware.js";

//  using express-router
const usersRouter = express.Router();
//inatnce of controller
const userController = new UserController();
// Routes
usersRouter.post("/signup", (req, res, next) => {
  userController.signUp(req, res, next);
});
usersRouter.post("/signin", (req, res) => {
  userController.signIn(req, res);
});
usersRouter.put("/resetpassword", jwtAuth, (req, res, next) => {
  userController.resetPassword(req, res, next);
});

export default usersRouter;
