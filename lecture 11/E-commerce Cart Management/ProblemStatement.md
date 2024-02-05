# Title: Efficient E-commerce Cart Management System

# Introduction + Scenario:

In this E-commerce project, your task is to enhance the cart management system by implementing the "addToCartController," "removeFromCartController," "addToCart" (Model), and "removeFromCart" (Model) functions. These functions are essential for adding, updating, and removing items from a user's shopping cart. User authentication is achieved through JWT tokens, providing a secure environment.

To add items to the cart, the "addToCartController" will utilize the 'addToCart' function within the cart Model. This function should not only enable adding new items but also updating the quantity of existing products. The data, including productId and quantity, must be passed through query parameters (e.g., http://localhost:3000/api/cart/?productId=6&quantity=5). User identification is fetched using the JWT token, which is implemented inside src/middlewares/jwtAuth.js.

On the flip side, the "removeFromCartController" will utilize the 'removeFromCart' function in the cart Model to delete items from the user's cart. It's essential to ensure proper validation and secure cart management, contributing to a seamless shopping experience. The userId is present in the JWT payload, accessible as req.userId.

Since the cart API is secured, the process begins with user login. Once logged in, users can use the cart API routes for adding, updating, and removing items from their cart.

# Objectives:

Implement the "addToCartController" to manage item addition and updates in the cart based on query parameters.
Implement the "removeFromCartController" to enable deletion of cart items using the item's ID provided in the request parameters (e.g., http://localhost:3000/api/cart/{item_id}) and leveraging the JWT payload.
Implement efficient "addToCart" and "removeFromCart" Model functions for streamlined cart item management.

# Expected Output:

Expected Output Video Link:
https://drive.google.com/file/d/1OKi4z485EwiTnMO6Z9h49iPKO1KQEDWR/view?usp=sharing

Upon successfully adding an item to the cart using the "addToCartController," the response should be in the following format:

{
"success": true,
"item": [user's cart items]
}

For example:
POST: http://localhost:3000/api/cart/?productId=6&quantity=10
{
"success": true,
"item": [
{
"id": 1,
"userId": 1,
"productId": 2,
"quantity": 5
},
{
"id": 3,
"userId": 1,
"productId": 6,
"quantity": 10
}
]
}

Upon successfully deleting an item using the "removeFromCartController," the response should follow this structure:

{
"success": true,
"deletedCartItem": [deleted item details]
}

For example:
DELETE: http://localhost:3000/api/cart/1
{
"success": true,
"deletedCartItem": {
"id": 1,
"userId": 1,
"productId": 2,
"quantity": 5
}
}

If the "removeFromCartController" receives an invalid ID for cart item deletion, the response should be:

DELETE: http://localhost:3000/api/cart/100
{
"success": false,
"msg": "operation not allowed"
}

# Notes/Hints:

The "addToCartController" must perform input validation and JWT token verification before processing the request.
Ensure that the "removeFromCartController" confirms the existence of the item in the user's cart before proceeding with deletion.
Consider utilizing suitable data structures like dictionaries/maps to optimize cart management efficiency.
