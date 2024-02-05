import mongoose from "mongoose";

export const connectMongoose = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/chatApp", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }
};
