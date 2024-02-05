## Implementing Form Validation in Node.js MVC Application

In a Node.js MVC-based project, you have been assigned the task of implementing form validation. This feature consists of an "addBlog.ejs" view, which is a form, and a "validateBlog" function inside "blog.controller.js" that handles a POST request at "/addblog" to process the form data. However, the current implementation of the validation function fails to validate the form data properly. Your goal is to enhance the validation logic to meet the following criteria:

# Tasks:

    # Validate the "Title" Field:

        1.The title field should not be empty
        2.The title field should contain at least three characters

    # Validate the "Description" Field:

        1.The description field should not be empty
        2.The description field should contain at least ten characters

    # Validate the "Image URL" Field:

        1.The image URL provided should be a valid URL

    # Update the "validateBlog" function in the "blog.controller.js" handling the "/addblog" POST request to include form validation logic.

# Upon failing any of these validation checks, appropriate error messages should be displayed on the view itself. The error messages should be as follows:

    1."Title cannot be empty"
    2."Title should have a minimum length of three characters"
    3."Description cannot be empty"
    4."Description should have a minimum length of ten characters"
    5."Please enter a valid image URL"

# Upon successfully validating these validation checks, appropriate success messages should be displayed on the view. The success message should be as follows:

    "Validation successful!"

# Expected Output

    https://files.codingninjas.in/validation-27964.gif
