### Title

Building Expense Management with Repository Pattern in MongoDB.

### Scenario

Implement expense tracking functionality for a finance management API used in a web application. Users should be able to add, fetch, filter, and tag their expenses. This involves completing the necessary controller and repository functions that will interact with the expense model.

### Objectives

1. Create an expense.repository.js file that will serve as the centralized location for all MongoDB operations related to expenses.

2. Implement the following methods inside the repository:

addExpense: Insert a new expense into the database.
getAllExpenses: Retrieve all expenses from the database.
getOne: Fetch a single expense by its id.
filterExpenses: Filter expenses based on criteria like minimum amount, maximum amount, and isRecurring status.
addTagToExpense: Add a tag to an existing expense.

3. Refactor the controller to make use of these new repository methods for operations like adding, fetching, filtering, and adding tags to expenses.

### Expected Output

Upon implementing and integrating the repository pattern:

1. Making a POST request to add a new expense should store the data seamlessly using the addExpense method from the repository.
2. With the appropriate id parameter in the GET request, the application should fetch a specific expense using the getOne method.
3. Filtering expenses through a GET request with specific query parameters should utilize the filterExpenses method.

The necessary query parameters for filtration include: minAmount, maxAmount, and isRecurring.
e.g: http://localhost:3000/api/expenses/filter?minAmount=10&maxAmount=20&isRecurring=false.
For a clearer grasp, please refer to the provided GIF:https://files.codingninjas.in/postman-30100.gif

4. POSTing a new tag to an expense should update the expense with the new tag using addTagToExpense.

### Notes/Hints

1. To make use of the repository inside your controller, you can initialize it in the controller's constructor.
2. When defining your routes, remember to bind the correct context (this) to the controller methods by using an arrow function.
