# Title: User Registration and Login API

# Introduction + Scenario:

Implement user registration and login functionality for an API used in a web application. Users should be able to register by providing their details and subsequently log in using their credentials. This requires completing the necessary controller functions for user registration and login, which will interact with the user model.

# Objectives:

Implement the "registerUser" controller function, which takes user's name, email, and password from req.body. It should use the "addUser" function from the user model to add the new user to the "users" array.
Implement the "loginUser" controller function, which takes user's email and password from req.body. It should use the "confirmLogin" function from the user model to verify the validity of the login attempt.

# Expected Output:

GIF Link: https://files.codingninjas.in/lec-9-topic-3-29146.gif

For "registerUser" function: successful addition of a new user to the "users" array.
For "registerUser" function: JSON response with a status code of 201 indicating success. The response should include a JSON object: { "status": "success", "user": <user_details> }.
For "loginUser" function: JSON response with a status code of 200 indicating success if the login is successful. The response should include a JSON object: { "status": "success", "msg": "login successful" }.
If the login attempt is unsuccessful due to invalid user details: JSON response with a status code of 400. The response should include a JSON object: { "status": "failure", "msg": "invalid user details" }.

# Notes/Hints:

Collect user details in the "registerUser" function and pass them to the "addUser" function.
Retrieve login credentials in the "loginUser" function and use the "confirmLogin" function to validate them.
Use res.json() method in Node.js with Express to send JSON responses.
Format the response as a properly structured JSON object according to the expected output.
Set the appropriate HTTP status codes (201, 200, or 400) to indicate the success or failure of the registration and login processes.
