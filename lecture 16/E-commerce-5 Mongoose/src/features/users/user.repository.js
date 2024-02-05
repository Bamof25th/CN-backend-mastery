import mongoose from "mongoose";
import { UserSchema } from "./user.schema.js";
import ApplicationError from "../../errorHandler/applicationError.js";
// We are creating model from schema.
const UserModel = mongoose.model("User", UserSchema);

export default class UserRepository {
  async signUp(user) {
    try {
      // create instance of  a model.
      const newUser = new UserModel(user);
      await newUser.save();
      return newUser;
    } catch (err) {
      if (err instanceof mongoose.Error.ValidationError) {
        throw err;
      } else {
        console.log(err);
        throw new ApplicationError("something went wrong in DataBase", 500);
      }
    }
  }

  async signIn(email, password) {
    try {
      return await UserModel.findOne({ email, password });
    } catch (err) {
      console.log(err);
      throw new ApplicationError("something went wrong in DataBase", 500);
    }
  }
  async findByEmail(email) {
    try {
      return await UserModel.findOne({ email });
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something went Wrong", 500);
    }
  }

  async resetPassword(userID, hashedPassword) {
    try {
      console.log(userID);
      let user = await UserModel.findById(userID);
      console.log(user);
      if (user) {
        user.password = hashedPassword;
        await user.save();
      } else {
        throw new Error("user not found");
      }
    } catch (err) {
      console.log(err);
      throw new ApplicationError("something went wrong in DataBase", 500);
    }
  }
}
