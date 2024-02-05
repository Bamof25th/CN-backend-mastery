// Please don't change the pre-written code
// Import the necessary modules here

import express from "express";
import { renderUpdateForm, updateUser } from "./user.controller.js";
const app = express();

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", "views");
app.get("/", renderUpdateForm);

// create POST route at ("/") to handle the form submission
app.post("/", updateUser);

export default app;
