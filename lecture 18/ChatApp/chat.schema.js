import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  userName: String,
  message: String,
  timestamp: Date,
});

export const chatModel = mongoose.model("Chat", chatSchema);
