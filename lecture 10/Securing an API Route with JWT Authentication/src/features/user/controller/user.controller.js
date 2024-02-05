// Please don't change the pre-written code
// Import the necessary modules here
import jwt from "jsonwebtoken";
import { addUser, confirmLogin } from "../model/user.model.js";
export const registerUser = (req, res, next) => {
  const userData = req.body;
  if (userData) {
    let user = addUser(userData);
    res.status(201).send({ status: "success", user });
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};

export const loginUser = (req, res) => {
  let status = confirmLogin(req.body);

  if (status) {
    //  Write your code here to create the JWT token and store it in a cookie named "jwtToken"
    const token = jwt.sign(
      { usersId: status.id, email: status.email },
      "(/`+jQ)tQl'IQgR&~hP>",
      { expiresIn: "1h" }
    );

    res
      .status(200).cookie("jwtToken", token, {maxAge: 900000, httpOnly: false})
      .json({ status: "success", msg: "login successfull", token });
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};
