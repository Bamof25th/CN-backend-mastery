## Node.js MVC: Parsing Form Data and Adding a New Blog

Enhance an existing Node.js MVC application to include form data parsing and routing functionality. Implement the following features within the existing codebase:

# Render Blog Form

    1.Implement a route handler for a GET request to "/createblog" in index.js.

    2.Complete the renderBlogForm function defined in blog.controller.js. The renderBlogForm function should serve as the controller for the "/createblog" route, rendering the "renderBlogForm" view.

    3.Add the necessary middleware to parse the request body.

# Render Blogs

    1.Implement a route handler for a GET request to "/" in index.js.

    2.Complete the renderBlogs function, as defined in blog.controller.js, to render the "blogs" view. This view should display all the data from the "blogs" array in blog.model.js.
    The renderBlogs function should serve as the controller for the "/createblog" route
    Additionally, implement the "blogs" view, which will list all the data for the blogs.

# Add New Blog

    1.Implement a route handler for a POST request to "/addblog" in index.js.
    2.Complete the addBlog function defined in blog.controller.js to handle the user's POST request.
    3.Update the "blogs" array in blog.model.js with the newly added blog.
    4.Render the "blog" view with the updated "blogs" array to display the newly added blog along with the existing blogs.

## Output

See the sample output GIF file inside output folder for the expected behavior of the implemented features.

Sample Output: https://files.codingninjas.in/output-27944.gif

## Note

Follow the Node.js MVC pattern to maintain a clear separation of concerns among models, views, and controllers. Utilize the EJS templating engine for rendering views. Your responsibility is limited to the specified changes within the existing codebase.
