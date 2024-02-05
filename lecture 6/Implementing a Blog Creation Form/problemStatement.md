## Implementing a Blog Creation Form and Routing in a Node.js MVC Application

You are tasked with enhancing an existing Node.js MVC (Model-View-Controller) application to include a blog creation form and associated routing functionality.

    Create a blog creation form named "createBlog.ejs" inside the "views" directory. The form should capture the following information from the user:
        1. Blog title: a text input field for entering the title of the blog.
        2. Blog description: a text area for entering a brief description of the blog.
        3. Blog image URL: a text input field for providing the URL of an image related to the blog.

    In the "blog.controller.js" file, complete the implementation of the "renderBlogForm" function. This function should:
        1. Render the "createBlog.ejs" view, displaying the blog creation form to the user.
        2. Ensure that the rendered view includes necessary form elements (title, description, and image URL inputs).

    Implement a GET route ("/createblog") in the "index.js" file, which serves as the main entry point of the application. This route should:
        1. Utilize the "renderBlogForm" function from the "blog.controller.js" file to render the blog creation form view.

## Output

    You can find the sample output in the output folder.

## Note

Your implementation should follow the Node.js MVC pattern, ensuring a clear separation of concerns among models, views, and controllers. Additionally, it should leverage the EJS templating engine to render the necessary views.

Please note that you are only responsible for implementing the changes specified above and should work within the existing codebase.
