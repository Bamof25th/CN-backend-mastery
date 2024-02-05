Title: User Registration and Login in MVC Project

Introduction:
In an MVC-based project, you have been given two views: "user-register.ejs" and "user-login.ejs." Your task is to create four routes to handle user registration and login functionalities. The project involves a web application where users can register and log in to access their accounts securely.

Objectives:

1.Implement a GET route "/register" that renders the "user-register.ejs" view using the getRegister function from the user.controller.js file and complete the functionality of the getRegister function.

2.Create a POST route "/register" that uses the addUser function from the user.controller.js file to handle the form submission from the "user-register" view. The addUser function should further use the registerUser function from the user.model.js file to add the user's registration data to the "users" array. Upon successful addition, redirect the user to the "user-login" view.

3.Develop a GET route "/login" that renders the "user-login.ejs" view using the getLogin function from the user.controller.js file and complete the functionality of the getLogin function.

4.Implement a POST route "/login" that uses the loginUser function from the user.controller.js file to authenticate the user's login credentials. The controller should utilize the authenticateUser function from the user.model.js file to validate the user's login data. If the user is valid, respond with { success: "true", message: "login successful" }; otherwise, respond with { success: "false", message: "login failed" }.

Expected Output:

Upon successful user registration, the user should be redirected to the "user-login" view. When logging in, the system should authenticate the user's credentials and respond with either { success: "true", message: "login successful" } or { success: "false", message: "login failed" } based on the validation result.

Link: https://files.codingninjas.in/lec-7-topic5-28198.gif

Requirements:

1.MVC architecture
2.user.controller.js with getRegister, addUser, getLogin, and loginUser functions
3.user.model.js with registerUser and authenticateUser functions
4.Views: "user-register.ejs" and "user-login.ejs"

Notes/Hints:

1.Ensure proper routing and function implementation for each route.
2.Pay attention to the flow of data between the controller and the model.
3.Refer to the provided output GIF for a better understanding of the expected behavior.
