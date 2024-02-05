import express from "express";
import { newUser } from "./user.controller.js";
import formValidationMiddleware from "./middleware.js";

const app = express();
app.use(express.json());
app.post("/new", formValidationMiddleware, newUser);

export default app;
