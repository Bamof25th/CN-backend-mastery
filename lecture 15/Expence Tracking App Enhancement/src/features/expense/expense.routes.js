import express from "express";
import ExpenseController from "./expense.controller.js";

const router = express.Router();

const expenseController = new ExpenseController();

// Route to create a new expense
router.post("/", (req, res) => {
  expenseController.add(req, res);
});

// Route to get expenses based on certain filter criteria
router.get("/filter", (req, res) => {
  expenseController.filter(req, res);
});

// Route to get one expense by its ID
router.get("/:id", (req, res) => {
  expenseController.getOne(req, res);
});

// Route to get all expenses
router.get("/", (req, res) => {
  expenseController.getAll(req, res);
});

// Route to add a tag to a specific expense
router.post("/:id/tags", (req, res) => {
  expenseController.addTag(req, res);
});

// ----------Above is previous code---------------

// Route to update a tag within a specific expense
router.patch("/:id/tags", (req, res) => {
  expenseController.updateTag(req, res);
});

// Route to delete a tag from a specific expense
router.delete("/:id/tags/:tag", (req, res) => {
  expenseController.deleteTag(req, res);
});


export default router;
