// Please don't change the pre-written code

import mongoose from "mongoose";
import { likeSchema } from "./like.schema.js";

// Import the necessary modules here
const likeModel =  mongoose.model("Like", likeSchema);
export const likeRepo = async (user_id, job_id, model) => {
  // Write your code here
  try {
    const newLike = new likeModel({
      user: user_id,
      likeable: job_id,
      on_model: model,
    });
    return await newLike.save();
  } catch (err) {
    console.log(err);
  }
};
export const getLikesRepo = async (id, on_model) => {
  // Write your code here
  const filter = { likeable: id, on_model };
  return await likeModel
    .find(filter)
    .populate("user", "name email age type mobile")
    .populate({ path: "likeable", model: on_model })
    .populate({
      path: "likeable",
      populate: {
        path: "applicants",
        model: "User",
        select: "name email age type mobile",
      },
    });
};
