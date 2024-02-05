import ApplicationError from "../../errorHandler/applicationError.js";
import { getDB } from "../../config/mongodb.js";
import UserModel from "./user.model.js";

class UserRepository {
  constructor() {
    this.collection = "users";
  }
  async signUp(name, email, password, type) {
    try {
      //1. Get the database.
      const db = getDB();

      //2. Get the Collection.
      const collection = db.collection(this.collection);

      const newUser = new UserModel(name, email, password, type);
      //3. Insert the document.
      await collection.insertOne(newUser);

      return newUser;
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something went Wrong", 500);
    }
  }

  async findByEmail(email) {
    try {
      //1. Get the database.
      const db = getDB();

      //2. Get the Collection.
      const collection = db.collection(this.collection);

      //3. Insert the document.
      return await collection.findOne({ email });
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something went Wrong", 500);
    }
  }
}

export default UserRepository;

// bin
// async signIn(email, password) {
//   try {
//     //1. Get the database.
//     const db = getDB();

//     //2. Get the Collection.
//     const collection = db.collection("users");

//     const newUser = new UserModel( email, password);
//     //3. Insert the document.
//     return await collection.findOne({email, password});

//     return newUser;
//   } catch (err) {
//       console.log(err)
//     throw new ApplicationError("Something went Wrong", 500);
//   }
// }
