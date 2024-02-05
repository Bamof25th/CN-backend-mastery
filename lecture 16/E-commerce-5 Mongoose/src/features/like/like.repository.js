import mongoose from "mongoose";
import { likeSchema } from "./like.schema.js";
import ApplicationError from "./../../errorHandler/applicationError.js";
import { ObjectId } from "mongodb";

const LikeModel = mongoose.model("Like", likeSchema);

export class LikeRepostory {
  async getLikes(type, id) {
    try {
      return await LikeModel.find({
        likeable: new ObjectId(id),
        on_model: type,
      })
        .populate({ path: "likeable", model: type })
        .populate("user");
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Someting went Worng in DB", 500);
    }
  }
  async likeProduct(userId, productId) {
    try {
      const newLike = new LikeModel({
        user: new ObjectId(userId),
        likeable: new ObjectId(productId),
        on_model: "Product",
      });
      return await newLike.save();
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Someting went Worng in DB", 500);
    }
  }
  async likeCategory(userId, categoryId) {
    try {
      const newLike = new LikeModel({
        user: new ObjectId(userId),
        likeable: new ObjectId(categoryId),
        on_model: "Category",
      });
      return await newLike.save();
    } catch (err) {
      console.log(err);
      throw new ApplicationError("Someting went Worng in DB", 500);
    }
  }
}
