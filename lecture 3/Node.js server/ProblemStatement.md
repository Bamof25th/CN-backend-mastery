Title: Node.js Server: Handle POST Request and Send Confirmation Email

Introduction:
Create a Node.js server that handles a POST request by saving the user's name, email address, and message to a file named "queries.txt". Additionally, use the Nodemailer library to send a confirmation email to a designated email address, notifying the user about the query. Finally, emit a custom event called "mailSent" to confirm successful email delivery.

Objectives:

1.Implement a Node.js server to handle a POST request.
2.Extract user's name, email address, and message from the request.
3.Append the extracted data to a file named "queries.txt".
4.Use Nodemailer library to send a confirmation email to a specified email address.
5.Emit a custom event, "mailSent," to confirm successful email delivery.

Expected Output:
The solution should save the user's details to "queries.txt", send a confirmation email to the designated email address, and emit a "mailSent" event in the console upon successful email delivery.

Link: https://files.codingninjas.in/summlec3-27267.gif

Notes/Hints:

1.Ensure the server listens on port 5000 as provided in the starter code.
2.Refer to the provided hint document for assistance with Nodemailer and handling POST requests.

Link: https://docs.google.com/document/d/11PNTQZ65NQdPaGPwTvrMYG3FxqQO4voA/edit?usp=sharing&ouid=108530590291536490990&rtpof=true&sd=true
