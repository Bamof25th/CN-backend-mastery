// Please don't change the pre-written code
// Import the necessary modules here

import mongoose from "mongoose";

export const applyJobSchema = new mongoose.Schema({
  // Write your code here
  jobid: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Job",
    },
  ],
  userid: [
    {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
  ],
});
