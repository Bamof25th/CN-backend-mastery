Title: Custom Header Setter for HTTP Response

Introduction:
Create a function that sets a custom header on an HTTP response object. You are provided with a server that listens on port 5000. The solution will be used in the context of handling HTTP requests and responses, allowing customization of headers for different purposes.

Objectives:
1.Implement the function "setCustomHeader" to set a custom header on the provided HTTP response object.
2.The function should take in the response object, along with the name and value of the header. Additionally, log a success message with the header name and value after setting the header.

Expected Output:

Upon execution, the function should set the custom header on the response object and log a success message in the format "{headerName} with value {headerValue} has been set successfully!" The expected output is demonstrated in the provided GIF.

https://files.codingninjas.in/setheader-27061.gif
e.g:
"Content-Type with value application/json has been set successfully!"

Notes/Hints:
Remember to access the appropriate properties or methods of the HTTP response object to set the custom header. Pay attention to the format of the success message and ensure that it includes the correct header name and value.
