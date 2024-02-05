import { ObjectId } from "mongodb";
import { getDB } from "../../config/mongodb.js";
import ApplicationError from "../../errorHandler/applicationError.js";

class ProductRepository {
  constructor() {
    this.collection = "products";
  }
  // Function for adding New products
  async add(newProduct) {
    try {
      // 1. Get the Database
      const db = getDB();

      // 2. Get The  new Collection  -> Products
      const collection = db.collection(this.collection);

      // 3. Inset the Document
      await collection.insertOne(newProduct);

      return newProduct;
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
  // old filter  {  async filter(minPrice, maxPrice, category) {
  //     try {
  //       const db = getDB();
  //       const collection = db.collection(this.collection);
  //       let filterExpression = {};
  //       if (minPrice) {
  //         filterExpression.price = { $gte: parseFloat(minPrice) };
  //       }
  //       if (maxPrice) {
  //         filterExpression.price = {
  //           ...filterExpression.price,
  //           $lte: parseFloat(maxPrice),
  //         };
  //       }
  //       if (category) {
  //         filterExpression.price = category;
  //       }

  //       return await collection.find(filterExpression).toArray();
  //     } catch (err) {
  //       console.log(err);
  //       throw new ApplicationError("Something Went Wrong With DataBase", 500);
  //     }
  //   }}

  // async rateProduct(userID, productID, rating) {
  //   try {
  //     const db = getDB();
  //     const collection = db.collection(this.collection);
  //     // 1. Find the product
  //     const product = await collection.findOne({
  //       _id: new ObjectId(productID),
  //     });
  //     //2. find the rating
  //     const userRating = product?.ratings?.find(r => r.userID == userID);
  //     if (userRating) {
  //       // 3. Update the rating
  //       await collection.updateOne(
  //         {
  //           _id: new ObjectId(productID),
  //           "ratings.userID": new ObjectId(userID),
  //         },
  //         {
  //           $set: {
  //             "ratings.$.rating": rating,
  //           },
  //         }
  //       );
  //     } else {
  //       await collection.updateOne(
  //         {
  //           _id: new ObjectId(productID),
  //         },
  //         {
  //           $push: { ratings: { userID: new ObjectId(userID), rating } },
  //         }
  //       );
  //     }
  //   } catch (err) {
  //     console.log(err);
  //     throw new ApplicationError("Something Went Wrong With DataBase", 500);
  //   }
  // }

  async rateProduct(userID, productID, rating) {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);
      // 1. Removes Existing Entries
      await collection.updateOne(
        {
          _id: new ObjectId(productID),
        },
        {
          $pull: { ratings: { userID: new ObjectId(userID) } },
        }
      );
      // 2. Add NEW Entries.
      await collection.updateOne(
        {
          _id: new ObjectId(productID),
        },
        {
          $push: { ratings: { userID: new ObjectId(userID), rating } },
        }
      );
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
  async avgRating(){

  }
}

export default ProductRepository;
