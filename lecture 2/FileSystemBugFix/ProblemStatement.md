Title: Node.js File System Bug Fix

Introduction:
A developer is building a Node.js application that involves file system interactions and CRUD operations. The application utilizes non-blocking code to maintain responsiveness. However, a bug has been encountered where retrieving and printing updated data from the "note.txt" file sometimes displays outdated information. Help the developer resolve this issue and ensure that the console always shows the most recent data.

Objectives:

1.Fix the bug causing outdated data to be displayed when printing to the console.
2.Ensure that the updated data is consistently retrieved and displayed after appending new data to "note.txt".

Expected Output:
The console should always display the most up-to-date data from the "note.txt" file after performing CRUD operations.

Notes/Hints:
To resolve the bug, make sure the read operation is executed only after the update operation is completed. Consider using appropriate asynchronous techniques in Node.js to ensure proper sequencing of operations.
