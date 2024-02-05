import ApplicationError from "../../errorHandler/applicationError.js";
import { getDB } from "../../config/mongodb.js";
import { ObjectId } from "mongodb";
class CartitemRepository {
  constructor() {
    this.collection = "cartItems"; // names the  collection in the database to run querires sh.
  }

  //1.add
  async add(productID, userID, quantity) {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);
      const id = await this.getNextCounter(db);

      // find the document
      // either Insert or update => updateOne with upsert helpps to do it easily in mongoDB
      // Insertion
      await collection.updateOne(
        {
          productID: new ObjectId(productID),
          userID: new ObjectId(userID),
        },
        { $setOnInsert: { _id: id }, $inc: { quantity: quantity } },
        { upsert: true }
      );
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Error in the Database", 500);
    }
  }
  //2.get all cart items of a particular user

  async get(userID) {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);
      return await collection.find({ userID: new ObjectId(userID) }).toArray();
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Error in the Database", 500);
    }
  }
  // 3. Delete
  async delete(userID, cartItemID) {
    try {
      const db = getDB();
      const collection = db.collection(this.collection);
      const result = await collection.deleteOne({
        _id: new ObjectId(cartItemID),
        userID: new ObjectId(userID),
      });
      return result.deletedCount > 0;
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Error in the Database", 500);
    }
  }
  // Adding specific id's to cart items.
  async getNextCounter(db) {
    const resultDoc = await db
      .collection("counters")
      .findOneAndUpdate(
        { _id: "cartItemId" },
        { $inc: { value: 1 } },
        { returnDocument: "after" }
      );
    // console.log(resultDoc.value);
    return resultDoc.value;
  }
}

export default CartitemRepository;
