import mongoose from "mongoose";

export const applyJobSchema = new mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    require: [true, "job id required"],
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "userId of the applicant is required"],
  },
});
