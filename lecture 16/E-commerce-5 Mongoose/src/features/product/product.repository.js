import { ObjectId } from "mongodb";
import { getDB } from "../../config/mongodb.js";
import ApplicationError from "../../errorHandler/applicationError.js";
import mongoose from "mongoose";
import { ProductSchema } from "./product.schema.js";
import { reviewSchema } from "./review.schema.js";
import { categoriesSchema } from "./category.schema.js";

const ProductModel = mongoose.model("Product", ProductSchema);
const ReviewModel = mongoose.model("Review", reviewSchema);
const CategoryModel = mongoose.model("Category", categoriesSchema);

class ProductRepository {
  constructor() {
    this.collection = "products";
  }
  // Function for adding New products
  async add(productData) {
    try {
      // 1. Adding Products
      productData.categories=productData.category.split(",");
      console.log(productData)
      const newProduct = new ProductModel(productData);
      const savedProduct = await newProduct.save();

      //2. Update Catagories
      await CategoryModel.updateMany(
        { _id: { $in: productData.categories } },
        { $push: { products: new ObjectId(savedProduct._id) } }
      );
      return savedProduct;
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something Went Wrong With DataBase", 500);
    }
  }

  async getAll() {
    try {
      //1. Get the database.
      const db = getDB();

      //2. Get the Collection.
      const collection = db.collection(this.collection);

      //3. Insert the document.
      const products = await collection.find().toArray();
      console.log(products);
      return products;
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something Went Wrong With DataBase", 500);
    }
  }

  async get(id) {
    try {
      //1. Get the database.
      const db = getDB();

      //2. Get the Collection.
      const collection = db.collection(this.collection);

      //3. Insert the document.
      return await collection.findOne({ _id: new ObjectId(id) });
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something Went Wrong With DataBase", 500);
    }
  }

  async filter(minPrice, categories) {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);
      let filterExpression = {};
      if (minPrice) {
        filterExpression.price = { $gte: parseFloat(minPrice) };
      }
      // ['cat1','cat2']
      categories = JSON.parse(categories.replace(/'/g, '"'));
      // console.log(categories);
      if (categories) {
        // filterExpression.price = category;
        filterExpression = {
          $and: [{ category: { $in: categories } }, filterExpression],
        };
      }
      // using projection operators
      return await collection
        .find(filterExpression)
        .project({ name: 1, price: 1, _id: 0, ratings: { $slice: 2 } })
        .toArray();
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something Went Wrong With DataBase", 500);
    }
  }
  async rateProduct(userID, productID, rating) {
    try {
      // 1. Check if Product exists
      const ProductToUpdate = await ProductModel.findById(productID);
      if (!ProductToUpdate) {
        throw new Error("The Product Does not Exist");
      }
      // 2.  find the existing review
      const userReview = await ReviewModel.findOne({
        product: new ObjectId(productID),
        user: new ObjectId(userID),
      });
      if (userReview) {
        // update the review
        userReview.rating = rating;
        await userReview.save();
      } else {
        // create a new review
        const newReview = new ReviewModel({
          product: new ObjectId(productID),
          user: new ObjectId(userID),
          rating: rating,
        });
        await newReview.save();
      }
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something Went Wrong With DataBase", 500);
    }
  }

  async avgProductPriceCategory() {
    try {
      const db = getDB();
      return await db
        .collection(this.collection)
        .aggregate([
          //stage 1: Get avg Price per catagory
          {
            $group: {
              _id: "$category",
              averagePrice: { $avg: "$price" },
            },
          },
        ])
        .toArray();
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Something Went Wrong With DataBase", 500);
    }
  }
  // 2. Find the avg rating of the product.
  async avgRating() {}
}

export default ProductRepository;
