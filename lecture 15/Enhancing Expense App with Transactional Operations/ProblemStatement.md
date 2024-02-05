## Title:
Enhancing Expense App with Transactional Operations

### Introduction + Scenario:

In the dynamic landscape of application development, incorporating robust data management techniques is of paramount importance. This challenge revolves around refining an existing expense management application. As you continue to develop this app, it becomes crucial to integrate the ability to execute multiple operations as a single transaction. Imagine you are a part of a team working on an expense app where users can add expenses and update tags. To ensure the consistency of financial records, it's imperative to enable users to perform both actions within a single transaction.

### Objectives:

Your objective is to extend the capabilities of the expense app by implementing a transactional feature. The task at hand is to complete the function that allows users to add an expense and update a tag simultaneously in expense.repository.js file. The database operations are provided before hand, you need to implement the correct transaction logic. This feature guarantees that if one of these operations fails, the entire transaction will be rolled back, ensuring the integrity of the data.

### Expected Output:

Output should look like: https://files.codingninjas.in/ques2-30776.gif

Upon successful implementation, the function should indicate that an expense has been added, and the associated tag has been updated, all within a single transaction. In case an error occurs during the transaction, the function should provide an appropriate error message.

### Requirements:

Utilize the provided function signature to incorporate the transactional functionality.
Apply the principles of database transactions to ensure the atomicity of the operations.


### Notes/Hints:

- No need to change the previous code.
- All changes must be done in the repository file only.
