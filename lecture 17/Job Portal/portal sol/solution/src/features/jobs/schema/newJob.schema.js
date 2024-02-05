import mongoose from "mongoose";

export const jobSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Job title is required"] },
  description: {
    type: String,
    required: [true, "Job description is required"],
  },
  company: {
    type: String,
    required: [true, "name of the company posting this job is required"],
  },
  salary: { type: Number, required: [true, "salary for this job is required"] },
  applicants: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});
