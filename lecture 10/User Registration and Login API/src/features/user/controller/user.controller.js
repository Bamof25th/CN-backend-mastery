// Please don't change the pre-written code
// Import the necessary modules here

import { addUser, confirmLogin } from "../model/user.model.js";

export const registerUser = (req, res, next) => {
  const userData = req.body;
  if (userData) {
    let user = addUser(userData);
    res.status(201).json({ status: "success", user });
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};

export const loginUser = (req, res) => {
  let status = confirmLogin(req.body);
  if (status) {
    res.status(200).json({ status: "success", msg: "login successful" });
  } else {
    res.status(400).json({ status: "failure", msg: "invalid user details" });
  }
};
