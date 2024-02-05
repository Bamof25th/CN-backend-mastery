### Title

Connecting and inserting a document in MongoDB.

### Scenario

You are building a confession platform where users can create a confession. You want to initialze a MongoDB database and save these confessions to the database.

### Objectives

1. Implement the connectToMongoDB function and use it to connect the application to a MongoDB database.

2. Implement the getDB function to access the "confession" database.

3. Complete the create method of the confession model to store new confessions inside the database.

### Expected Output

Upon successful completion, the application should create a new confession on the '/api/confession' route and store it inside the MongoDB database.

### Notes/Hints

1. The create method should respond with a 201 status code and the new confession instance for successful requests and return a 500 status code and err if any.
