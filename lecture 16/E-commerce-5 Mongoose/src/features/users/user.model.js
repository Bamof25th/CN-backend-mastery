// import ApplicationError from "../../errorHandler/applicationError.js";
// import { getDB } from "../../config/mongodb.js";
export default class UserModel {
  constructor(name, email, password, type, id) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.type = type;
    this.id = id;
  }
 

  // static signIn(email, password) {
  //   const user = users.find((u) => u.email == email && u.password == password);
  //   return user;
  // }

  static getAll() {
    return users;
  }
}

let users = [
  {
    name: "Admin",
    email: "admin@ecom.com",
    password: "anibag",
    type: "Seller",
    id: 1,
  },
  {
    name: "Customer",
    email: "cust@ecom.com",
    password: "1234",
    type: "Customer",
    id: 2,
  },
];
