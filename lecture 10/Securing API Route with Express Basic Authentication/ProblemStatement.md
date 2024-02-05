# Title: Securing API Route with Express Basic Authentication

# Introduction + Scenario:

In this problem, you are tasked with securing the "/api/product" route using basic-authentication. The scenario involves a web application that provides user login and registration APIs, along with a product API to fetch all products. To ensure data privacy and restrict access, you need to implement the "basicAuthMiddleware" to allow only authenticated users with valid credentials to access the "/api/product" API.

# Objectives:

Implement express-basic authentication middleware inside "src/middlewares/basicAuth.js."

Restrict access to the "/api/product" route.

Allow only authenticated users with valid credentials to access the API.

# Expected Output:

GIF Link: https://files.codingninjas.in/basic-auth-29286.gif

The expected outcome is to have the "/api/product" API accessible only to users who provide valid credentials. Unauthorized users should receive an authentication error or be denied access.

# Notes/Hints:

1.Product Api should respond with 401 Unauthorized without passing credentials and 200 with basic authentication.
2.Use the provided user login and registration APIs.
3.Consider using middleware to handle authentication.
4.Remember to test the solution to ensure it functions as expected.
