import { authenticateUser, registerUser } from "../models/user.model.js";

export default class UserController {
  getRegister = (req, res, next) => {
    res.render("user-register");
  };
  getLogin = (req, res, next) => {
    res.render("user-login");
  };
  addUser = (req, res) => {
    const status = registerUser(req.body);
    if (status) return res.render("user-login");
  };
  loginUser = (req, res) => {
    const isAuth = authenticateUser(req.body);
    console.log()
    if (isAuth) {
      req.session.userEmail = req.body.email;
      res.render("msgPage", { message: "login successfull" });
    } else res.render("msgPage", { message: "login failed" });
  };
  getSecure = (req, res) => {
    res.render("secure-page");
  };
}
