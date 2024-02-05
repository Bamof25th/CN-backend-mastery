Title: Refactoring Express Routes for Tweet Feature

Introduction:
Given an existing index.js file containing all the routes for a feature named 'tweet', the task is to refactor these routes into a separate file using the express Router module. This separation will improve code organization and maintainability. The solution will be used in a web application that allows users to view and create tweets.

Objectives:

1.Create a new file, tweet.routes.js, inside src/features/tweet/ directory.
2.Move all route handlers from index.js to tweet.routes.js.
3.Ensure the GET /api/tweets endpoint lists all tweets.
4.Ensure the POST /api/tweets endpoint creates a new tweet.

Expected Output:
The index.js file should only contain middleware and server configurations. All route handlers should be moved to tweet.routes.js.

Notes/Hints:
1.Use the express Router module to create a separate file for routes.
2.Pay attention to the file structure and directory location for the tweet.routes.js file.
3.Ensure the route handlers are correctly moved and mapped to the appropriate endpoints.
