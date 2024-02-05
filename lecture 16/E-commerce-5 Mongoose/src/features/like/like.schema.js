import mongoose from "mongoose";

export const likeSchema = mongoose
  .Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    likeable: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "on_model",
    },
    on_model: {
      type: String,
      enum: ["Product", "Category"],
    },
  })
  .pre("save", (next) => {
    console.log("new Like Coming in");
    next();
  })
  .post("save", (doc) => {
    console.log("like is saved");
    console.log(doc);
  })
  .pre("find", (next) => {
    console.log("retriving Likes");
    next();
  })
  .post("find", (doc) => {
    console.log("Post find");
    console.log(doc);
  });
