import mongoose from "mongoose";
import { jobSchema } from "./schema/newJob.schema.js";
import { applyJobSchema } from "./schema/applyJob.schema.js";

const JobModel = mongoose.model("Job", jobSchema);
const ApplyJobModel = mongoose.model("JobApplicants", applyJobSchema);

export const createNewJob = async (job) => {
  const newJob = new JobModel(job);
  return await newJob.save();
};

export const findJobRepo = async (_id) => {
  return await JobModel.findById(_id);
};

export const applyJobRepo = async (jobId, userId) => {
  const checkIfAlreadyApplied = await ApplyJobModel.findOne({ jobId, userId });
  if (checkIfAlreadyApplied) {
    return false;
  } else {
    // updateApplyJobModel
    await new ApplyJobModel({ jobId, userId }).save();

    // update jobModel applicants
    const filter = { _id: jobId };
    const update = { $push: { applicants: userId } };
    return await JobModel.findByIdAndUpdate(filter, update, {
      new: true,
    });
  }
};
