// Please don't change the pre-written code
import { blogs } from './../models/blog.model.js';
// Import the necessary modules here

export const renderBlogs = (req, res) => {
  return res.render("blogs", { blogs });
};
export const renderBlogForm = (req, res) => {
  // Write your code here
  res.render("addBlogForm");
};
export const addBlog = (req, res) => {
  // Write your code here
  console.log(req.body)
  blogs.push(req.body);

  res.render("blogs" , { blogs });
};
