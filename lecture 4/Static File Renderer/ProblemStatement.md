Title: Static File Renderer

Introduction:
You are tasked with enhancing the functionality of an existing codebase. The goal is to complete the 'renderStatic' function, which is responsible for rendering a static file when a user makes a GET request to a specific URL. This feature is crucial for serving static content efficiently in web applications and can greatly enhance the user experience. Your solution will be integrated into an existing server instance and should handle requests for the 'index.html' file.

Objectives:

1.Implement the 'renderStatic' function in 'index.js'.
2.Ensure the function takes a server instance and the directory of the static folder as arguments.
3.Handle GET requests to http://localhost:5000/index.html.
4.Render the 'index.html' file in response to the GET request.

Expected Output:
Upon receiving a GET request to http://localhost:5000/index.html, the server should render and return the contents of the 'index.html' file as the response.

Link: https://files.codingninjas.in/staticrender-27074.gif

Notes/Hints:

1.Ensure that the file path is correctly resolved when serving the 'index.html' file.
2.Use the appropriate server method to handle the GET request and send the file contents as the response.
3.Pay attention to the URL and file path mappings to serve the 'index.html' file correctly.
