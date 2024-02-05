import mongoose from "mongoose";

export const categoriesSchema = mongoose.Schema({
  name: String,
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:'Product'
    },
  ],
});
