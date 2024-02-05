import mongoose, { Schema } from "mongoose";

export const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    maxLength: [25, "Name cant be greqater than 25 characters"],
  },
  email: {
    type: String,
    unique: true,
    required: true,
    mach: [/.+\@.+\../, "Please enter a Valid email"],
  },
  password: {
    type: String,
    // validate: {
    //   validator: function (value) {
    //     return /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,12}$/.test(
    //       value
    //     );
    //   },
    //   message:
    //     "Password  invalid, It should be between 8-12 characters and have a Special Character",
    // },
  },
  type: { type: String, enum: ["Customer", "Seller"] },
});
