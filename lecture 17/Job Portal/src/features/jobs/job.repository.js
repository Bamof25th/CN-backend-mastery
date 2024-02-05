// Please don't change the pre-written code
import { jobSchema } from "./schema/newJob.schema.js";
import { applyJobSchema } from "./schema/applyJob.schema.js";
import mongoose from "mongoose";
// Import the necessary modules here
const JobModel =  mongoose.model("Jobs", jobSchema);
const ApplyJobModel =  mongoose.model("JobApplicants", applyJobSchema);

export const createNewJob = async (job) => {
  // Write your code here
  try {
    const newJon = new JobModel(job);
    return await newJon.save();
  } catch (err) {
    console.log(err);
    throw new Error("Something Went Wrong in DataBase", 500);
  }
};

export const applyJobRepo = async (jobId, userId) => {
  // Write your code here
  try {
    const alreadyApplied = await ApplyJobModel.findOne({ jobId, userId });
    if (alreadyApplied) {
      return false;
    } else {
      await new ApplyJobModel({ jobId, userId }).save();
    }
  } catch (err) {
    console.log(err);
    throw new Error("Something Went Wrong in DataBase", 500);
  }
};
export const findJobRepo = async (_id) => {
  // Write your code here
  try {
    return await JobModel.findById(_id);
  } catch (err) {
    console.log(err);
    throw new Error("Something Went Wrong in DataBase", 500);
  }
};
