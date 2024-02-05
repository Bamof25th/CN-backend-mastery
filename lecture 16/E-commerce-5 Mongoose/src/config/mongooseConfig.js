import mongoose from "mongoose";

import dotenv from "dotenv";
import { categoriesSchema } from "../features/product/category.schema.js";
dotenv.config();
const url = process.env.DB_URL;

export const connectusingMongoose = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDb Connected Using Mongoose.");
    AddCategories();
  } catch (err) {
    console.log("Error connecting to the database.");
    console.log(err);
  }
};

async function AddCategories() {
  const CategoryModel = mongoose.model("Category", categoriesSchema);
  const categories = await CategoryModel.find();
  if (!categories || categories.length == 0) {
    await CategoryModel.insertMany([
      { name: "Books" },
      { name: "Shoes" },
      { name: "Clothings" },
    ]);
  }
  console.log("catagories Added");
}
