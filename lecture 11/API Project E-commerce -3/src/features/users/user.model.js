export default class UserModel {
  constructor(name, email, password, type, id) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.type = type;
    this.id = id;
  }
  static signUp(name, email, password, type) {
    const newUser = new UserModel(name, email, password, type);
    newUser.id = users.length + 1;
    users.push(newUser);
    return newUser;
  }

  static signIn(email, password) {
    const user = users.find((u) => u.email == email && u.password == password);
    return user;
  }

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
