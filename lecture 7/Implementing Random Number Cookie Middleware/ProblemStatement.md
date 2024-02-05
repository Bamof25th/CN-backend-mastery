Title: Implementing Random Number Cookie Middleware

Introduction:
A developer has built a game where the server generates a random number, stores it in a cookie, and allows the user to guess the number. The game requires user authentication, allowing only logged-in individuals to participate. The necessary implementation, such as user login/signup, is already in place. However, the developer needs assistance in incorporating the 'auth' middleware and implementing the required express-session in the 'index.js' file. The developer also wants your help in implementing the middleware function "generateRandomNumber" inside the file "middleware/generateRandomNumber.js" and using both middlewares in conjunction with the existing code in the file "index.js".

Objectives:

1.Modify the existing code in the file "index.js" to use the 'auth' middleware with app.get("/", handleGame) to provide access only to logged-in users.

2.Implement the necessary Express Session to manage and maintain user sessions in the application.

3.Complete the implementation of the middleware function "generateRandomNumber" inside the file "middleware/generateRandomNumber.js" to generate a random number between 1 and 10. Set this number as a cookie named 'randomNumber' with a 1-day expiration.

4.Modify the existing code in the file "index.js" to use the generateRandomNumber middleware with app.get("/", handleGame) to set the random number cookie when a user visits the website for the first time.

Expected Output:

Link: https://files.codingninjas.in/game-1-28238.gif
video: inside 'output' directory
