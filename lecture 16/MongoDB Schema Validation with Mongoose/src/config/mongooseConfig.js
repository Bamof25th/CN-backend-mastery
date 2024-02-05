// Please don't change the pre-written code
// Import the necessary modules here
import mongoose from "mongoose";


export const connectUsingMongoose = async () => {
  // write your code here
  const url = "mongodb://localhost:27017";
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("MongoDB connected using Mongoose");
};
