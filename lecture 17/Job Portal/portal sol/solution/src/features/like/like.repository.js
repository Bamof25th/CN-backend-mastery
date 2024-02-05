import mongoose from "mongoose";
import { likeSchema } from "./like.schema.js";
const likeModel = mongoose.model("Like", likeSchema);

export const likeRepo = async (user_id, job_id, model) => {
  const newLike = new likeModel({
    user: user_id,
    likeable: job_id,
    on_model: model,
  });
  return await newLike.save();
};
export const getLikesRepo = async (id, on_model) => {
  const filter = { likeable: id, on_model };
  return likeModel
    .findOne(filter)
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
