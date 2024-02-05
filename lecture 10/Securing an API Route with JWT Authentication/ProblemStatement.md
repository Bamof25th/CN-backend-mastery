# Title: Securing an API Route with JWT Authentication

# Introduction + Scenario:

In the given web application, there is a route "/api/product" that needs to be secured using JWT (JSON Web Token) authentication. The objective is to modify the "loginUser" controller to generate a JWT token and store it in a cookie named "jwtToken". Additionally, an "jwtAuth" middleware should be implemented to fetch the "jwtToken" cookie, verify it, and grant access to the route. Otherwise, a response with status 401 and JSON object { success: false, msg: error } should be sent.

# Objectives:

Modify the "loginUser" controller to generate a JWT token upon successful user login.

Store the generated JWT token in a cookie named "jwtToken".

Implement the "jwtAuth" middleware to fetch and verify the "jwtToken" cookie.

Grant access to the "/api/product" route if the token is valid.

Send a response with status 401 and JSON object { success: false, msg: error } if the token is invalid or missing.

# Expected Output:

GIF Link: https://files.codingninjas.in/summative-29149.gif

Upon successful implementation, the "loginUser" controller should generate a JWT token and store it in a cookie named "jwtToken". The "jwtAuth" middleware should verify the token and allow access to the "/api/product" route. If the token is invalid or missing, a response with status 401 and JSON object { success: false, msg: error } should be sent.

# Notes/Hints:

Use the appropriate JWT library and follow its documentation for generating and verifying tokens.
Refer to the documentation or examples for handling cookies in your chosen programming language.
Make sure to handle edge cases such as expired or tampered tokens in the "jwtAuth" middleware.
