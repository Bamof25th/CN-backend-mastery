// Please don't change the pre-written code
// Import the necessary modules here

import mongoose from "mongoose";

export const jobSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Job Title is required"] },
  description: {
    type: String,
    required: [true, "Job description is required"],
  },
  company: {
    type: String,
    required: [true, "name of the company posting this job is required"],
  },
  salary: {
    type: Number,
    required: [true, " Salary for the Job  is required"],
  },
  applicants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});
