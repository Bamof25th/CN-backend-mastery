// Don't change the previous code

import { getClient, getDB } from "../../config/mongodb.js";
import { ObjectId } from "mongodb";
import ExpenseModel from "./expense.model.js";

class ExpenseRepository {
  constructor() {
    this.collectionName = "expenses"; // name of the collection in mongodb
  }

  //-------------------previous code starts---------------------

  // Create a new expense
  async addExpense(expense) {
    const db = getDB();
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

  // Aggregate total revenue for each product
  async aggregateTotalRevenue() {
    const db = getDB();
    const pipeline = [
      {
        $group: {
          _id: "$title",
          totalRevenue: { $sum: "$amount" },
        },
      },
    ];

    const result = await db
      .collection(this.collectionName)
      .aggregate(pipeline)
      .toArray();
    return result;
  }

  // Group expenses by tags
  async groupExpensesByTags() {
    const db = getDB();
    const pipeline = [
      {
        $group: {
          _id: "$tags",
          expenses: {
            $push: {
              _id: "$_id",
              title: "$title",
              amount: "$amount",
              date: "$date",
              isRecurring: "$isRecurring",
              tags: "$tags",
            },
          },
        },
      },
    ];

    const result = await db
      .collection(this.collectionName)
      .aggregate(pipeline)
      .toArray();
    return result;
  }

  // Group and calculate average by recurring status
  async groupAndCalculateAvgByRecurring() {
    const db = getDB();
    const pipeline = [
      {
        $group: {
          _id: "$isRecurring",
          avgAmount: { $avg: "$amount" },
        },
      },
    ];

    const result = await db
      .collection(this.collectionName)
      .aggregate(pipeline)
      .toArray();
    return result;
  }

  async addExpenseWithTransaction(expense, session) {
    const db = getDB();
    await db.collection(this.collectionName).insertOne(expense, { session });
    return expense;
  }

  // Transactional version: Update a tag in an expense with transaction
  async updateTagInExpenseWithTransaction(id, oldTag, newTag, session) {
    const db = getDB();
    const filter = { _id: new ObjectId(id), tags: oldTag };
    const update = { $set: { "tags.$": newTag } };
    const expenses = await db
      .collection(this.collectionName)
      .updateOne(filter, update, { session });
    return expenses;
  }

  //--------------------previous code ends----------------------

  // Do the changes below only

  // Transactional method: Add expense with transaction

  // Here are the two database queries that we want to wrap around the transaction
  // Your task is to complete the transaction logic

  async addExpenseAndUpdateTagTransaction(addParams, updateParams) {
    const { title, amount, date, isRecurring, tags } = addParams;
    const newTag = updateParams.newTag;
    const oldTag = updateParams.oldTag;

    const expenseToCreate = new ExpenseModel(
      title,
      amount,
      date,
      isRecurring,
      tags
    );

    const client = getClient();
    const session = client.startSession();

    try {
      session.startTransaction();
      await this.addExpenseWithTransaction(expenseToCreate, session);

      const { id } = expenseToCreate;
      await this.updateTagInExpenseWithTransaction(id, oldTag, newTag, session);

      await session.commitTransaction();
      session.endSession();
    } catch (err) {
      await session.abortTransaction();
      session.endSession();
      throw err;
    } finally {
      client.close();
    }
  }
}

export default ExpenseRepository;
