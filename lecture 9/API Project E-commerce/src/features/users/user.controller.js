import UserModel from "./user.model.js";

export default class UserController {
  signUp(req, res) {
    const { name, email, password, type } = req.body;
      console.log(req.body)
    const createdUser = UserModel.signUp(name, email, password, type);
      console.log(createdUser);
    res.status(201).send(createdUser);
  }
  signIn(req, res) {
    const { email, password } = req.body;
    const result = UserModel.signIn(email, password);
    if (!result) {
      return res.status(400).send("Incorrect Credentials");
    } else {
      return res.send("login successfull");
    }
  }
}
