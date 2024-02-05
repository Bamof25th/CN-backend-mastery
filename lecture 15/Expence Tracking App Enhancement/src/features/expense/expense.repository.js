//Don't change the prewritten code

import { getDB } from "../../config/mongodb.js";
import { ObjectId } from "mongodb";

class ExpenseRepository {
  constructor() {
    this.collectionName = "expenses"; // name of the collection in mongodb
  }

  //-----------------Prewritten code starts----------------------

  // Create a new expense
  async addExpense(expense) {
    const db = getDB();
    console.log(expense);
    await db.collection(this.collectionName).insertOne(expense);
    return expense;
  }

  // Get one expnese by its ID
  async getOne(id) {
    const db = getDB();
    const expense = await db
      .collection(this.collectionName)
      .findOne({ _id: new ObjectId(id) });
    return expense;
  }

  // Get all expenses
  async getAllExpenses() {
    const db = getDB();
    const expenses = await db.collection(this.collectionName).find().toArray();
    return expenses;
  }

  // Add tag to an expense
  async addTagToExpense(id, tag) {
    const db = getDB();
    const result = await db
      .collection(this.collectionName)
      .updateOne({ _id: new ObjectId(id) }, { $push: { tags: tag } });
    return result;
  }

  // Filter expenses based on date, amount, and isRecurring field
  async filterExpenses(criteria) {
    const db = getDB();
    let query = {};

    if (criteria.minAmount || criteria.maxAmount) {
      query.amount = {};

      if (criteria.minAmount) {
        query.amount.$gte = parseFloat(criteria.minAmount);
      }

      if (criteria.maxAmount) {
        query.amount.$lte = parseFloat(criteria.maxAmount);
      }
    }

    if (criteria.isRecurring !== undefined) {
      query.isRecurring = criteria.isRecurring === "true";
    }

    const expenses = await db
      .collection(this.collectionName)
      .find(query)
      .toArray();
    return expenses;
  }

  //----------------prewritten code ends--------------------------

  // Change below functions only

  // Update a tag in an expense
  async updateTagInExpense(id, oldTag, newTag) {
    const db = getDB();
    const filter = { _id: new ObjectId(id), tags: oldTag };
    const update = { $set: { "tags.$": newTag } };
    const expenses = await db
      .collection(this.collectionName)
      .updateOne(filter, update);
    return expenses;
  }

  // Delete a tag from an expense
  async deleteTagFromExpense(id, tag) {
    const db = getDB();
    const filter = { _id: new ObjectId(id) };
    const update = { $pull: { tags: tag } };
    await db.collection(this.collectionName).updateOne(filter, update);
  }
}

export default ExpenseRepository;
