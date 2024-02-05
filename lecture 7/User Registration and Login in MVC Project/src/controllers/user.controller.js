// Please don't change the pre-written code
// Import the necessary modules here

import { authenticateUser, registerUser } from "../models/user.model.js";

export default class UserController {
  getRegister = (req, res, next) => {
    // Write your code here
    res.render("user-register");
  };
  getLogin = (req, res, next) => {
    // Write your code here
    res.render("user-login");
  };
  
  addUser = (req, res) => {
    // Write your code here
    const status =  registerUser(req.body);
     if ( status ) return res.render("user-login")
  };
  loginUser = (req, res) => {
    // Write your code here
    const isAuth = authenticateUser(req.body);
    if (isAuth) {
      res.send({ success: "true" , message: "login successfull" });
    }else{
      res.send({ success: "false" , message: "login failed" });
    }
  };

};                                                