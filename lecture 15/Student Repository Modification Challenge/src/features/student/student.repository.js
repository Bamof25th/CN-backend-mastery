//No need to change code other than the last four methods
import { getClient, getDB } from "../../config/mongodb.js";

const collectionName = "students";

class studentRepository {
  async addStudent(studentData) {
    const db = getDB();
    await db.collection(collectionName).insertOne(studentData);
  }

  async getAllStudents() {
    const db = getDB();
    const students = await db.collection(collectionName).find({}).toArray();
    return students;
  }

  //You need to implement methods below:

  async createIndexes() {
    const db = getDB();
    await db.collection("collectionName").createIndex({ name: 1 });
    await db.collection("collectionName").createIndex({ age: 1, grade: -1 });
    // await db.collection("students").createIndex({ grade: 1, order: 1 });
    // console.log("Indexes are Made ");
  }

  async getStudentsWithAverageScore() {
    const db = getDB();
    const pipeline = [
      {
        $project: {
          _id: 0,
          name: 1,
          averageScore: { $avg: "$assignments.score" },
        },
      },
    ];
    return await db.collection("collectionName").aggregate(pipeline).toArray();
  }

  async getQualifiedStudentsCount() {
    const db = getDB();
    const method = [
      {
        $match: {
          $age: { $gt: 9 },

          $grade: { lte: "B" },

          "assignments.title": { $in: ["Math"] },

          "assignments.score": { gte: 60 },
        },
      },
      {
        $count: "qualifiedStudentscount",
      },
    ];
    const result = await db
      .collection("collectionName")
      .aggregate(method)
      .toArray();

    return result[0] ? result[0].qualifiedStudentsCount : 0;
  }

  async updateStudentGrade(studentId, extraCreditPoints) {
    const db = getDB();
    const client = getClient();
    const session = client.startSession();

    try {
      session.startTransaction();
      const student = await db
        .collection(collectionName)
        .findOne({ _id: new ObjectId(studentId) }, { session });
      if (!student) {
        throw new Error("Student not found.");
      }

      // Calculate new scores and grade
      const updatedAssignments = student.assignments.map((assignment) => {
        return {
          ...assignment,
          score: assignment.score + extraCreditPoints,
        };
      });

      // Calculate the new grade based on the updated assignments
      const totalScore = updatedAssignments.reduce(
        (sum, assignment) => sum + assignment.score,
        0
      );
      const averageScore = totalScore / updatedAssignments.length;

      let updatedGrade = "A";
      if (averageScore >= 90) {
        updatedGrade = "A";
      } else if (averageScore >= 80) {
        updatedGrade = "B";
      } else if (averageScore >= 70) {
        updatedGrade = "C";
      } else if (averageScore >= 60) {
        updatedGrade = "D";
      } else {
        updatedGrade = "F";
      }

      // Perform both updates in a single transaction
      await db
        .collection(collectionName)
        .updateOne(
          { _id: new ObjectId(studentId) },
          { $set: { assignments: updatedAssignments, grade: updatedGrade } },
          { session }
        );

      await session.commitTransaction();
      session.endSession();
    } catch (error) {
      await session.abortTransaction();
      session.endSession();
      throw error;
    } finally {
      client.close();
    }
  }
}

export default studentRepository;
