export default class userModel {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  // to add or register newUser
  static add(name, email, password) {
    const newUser = new userModel(users.length + 1, name, email, password);
    users.push(newUser);
  }

  static verify(email ,password){
      const result = users.find((u) => u.email== email && u.password == password ) ;
       console.log(result)
      return result;

    }
}




var users = []
