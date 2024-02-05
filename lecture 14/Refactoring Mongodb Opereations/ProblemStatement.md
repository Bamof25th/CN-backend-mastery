### Title

Refactoring MongoDB Operations with Repository Pattern.

### Scenario

As the confession platform grows, you are focusing on maintaining clean architecture and following best practices. You have identified that the current approach of having database operations directly inside the model file may not be the best pattern for scalability and maintainability. You've decided to employ the Repository Pattern to manage your MongoDB operations more efficiently.

### Objectives

1. Create a bucketList.repository.js file that will hold the database operations (methods) for the Bucket List.

2. Implement the addBucketListItem and findOneBucketListItem methods inside the repository file. These methods should:

addBucketListItem: Insert a new bucket list item into the database.
findOneBucketListItem: Retrieve a bucket list item by its title from the database.

3. Refactor the add and get controller methods to use the new repository methods.

### Expected Output

The application should function as before, but with a cleaner architecture:

1. The POST request to add a new bucket list item should work seamlessly by using the repository's addBucketListItem method.
2. The GET request to retrieve a bucket list item by title should fetch the item using the repository's findOneBucketListItem method.

### Notes/Hints

1. To make use of the repository inside your controller, you can initialize it in the controller's constructor.
2. When defining your routes, remember to bind the correct context (this) to the controller methods by using an arrow function.
