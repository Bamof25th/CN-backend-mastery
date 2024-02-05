import ProductModel from "../model/product.model.js";
import userModel from "../model/users.model.js";
// import { session } from "express-session";

export default class UserController {
  getRegister(req, res, next) {
    // let users = userModel.getAll();
    return res.render("register.ejs");
  }

  getLogin(req, res) {
    return res.render("login.ejs", { errorMessage: null });
  }

  postRegister(req, res) {
    const { name, email, password } = req.body;
    userModel.add(name, email, password);

    res.render("login.ejs", { errorMessage: null });
  }

  postLogin(req, res) {
    const { email, password } = req.body;
    const user = userModel.verify(email, password);
    if (!user) {
      return res.render("login.ejs", { errorMessage: "Invalid Credentials" });
    }

    req.session.userEmail = email; //accesss to session object

    var products = ProductModel.getAll();
    res.render("products.ejs", { products, userEmail: req.session.userEmail });
  }

  logout(req, res){
    // on logout, destroy the session
    req.session.destroy((err) =>{
      if (err) {
        console.log(err)
      } else {
         res.redirect('/login');
      }
    });
    res.clearCookie('lastVisit')
  }
}
