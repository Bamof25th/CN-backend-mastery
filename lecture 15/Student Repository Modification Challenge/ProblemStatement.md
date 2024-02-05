## Title:
 Student Repository Modification Challenge

### Introduction + Scenario: 
In the context of building a student management project, we need participants to modify the provided repository file. This file handles database interactions for student data. By making the necessary adjustments to the repository, participants will enhance its functionality, ensuring effective data management for the student application.

### Objectives: 
Your task is to update the studentRepository class to implement the following methods, each serving a specific purpose within the student management project:

1. createIndexes: Enhance the method to create database indexes that optimize querying performance. Implement two types of indexes: a single-field index on the 'name' field (ascending) and a compound index on the 'age' field (ascending) and 'grade' field (descending).

2. getStudentsWithAverageScore: Update the method to calculate the average score for each student using the MongoDB aggregation pipeline. The output should include the student's name and their calculated average score.

3. getQualifiedStudentsCount: Adjust the method to determine the count of students who meet specific criteria. Only include students with an age greater than 9, a grade less than or equal to 'B', an assignment titled 'math', and a score of 60 or higher.

4. updateStudentGrade: Implement a method to update a student's grade based on their assignment scores. If a student's assignment score is updated with extra credit points, recalculate their grade accordingly. Ensure that this operation is atomic and that the assignment score update and grade recalculation are performed as a single transaction.
The following grading scale is used to assign grades based on the average assignment scores 
A: 90% and above
B: 80% - 89%
C: 70% - 79%
D: 60% - 69%
F: Below 60%

### Expected Output: 

Output should look like: https://files.codingninjas.in/screencast-from-18-09-23-103521-31144.mp4

Participants should modify the studentRepository class to incorporate the provided methods according to the given specifications. The methods should interact with the database as outlined and produce the intended outcomes.

### Requirements:
 Utilize the provided MongoDB utility functions (getClient and getDB) for database connectivity. For the createIndexes method, create a single-field index on the 'name' field in ascending order and a compound index on the 'age' field in ascending order and the 'grade' field in descending order.

### Notes/Hints: 
- You can use the POST route "http://localhost:3000/api/student/add-student" to create a new student with the provided sample data for a student, for example:
{
    "name": "Sumit", 
    "age": 22,
    "grade": "A",
    "assignments": [
         { "title": "Math", "score": 30 },
         { "title": "Science", "score": 33 }
    ]
}
- Do not change the previous code.
- Changes are meant to be done only in repository file.
