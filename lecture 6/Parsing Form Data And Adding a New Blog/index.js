// Please don't change the pre-written code
// Import the necessary modules here

import express from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import { addBlog, renderBlogForm, renderBlogs } from "./src/controllers/blog.controller.js";

const app = express();

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));
app.use(expressEjsLayouts);

// Write your code here
app.get('/', renderBlogs);
app.get('/createblog', renderBlogForm);
app.post('/addblog', addBlog);

export default app;
