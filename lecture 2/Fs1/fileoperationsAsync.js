const fs = require("fs");

//Reading DATA

// fs.readFile("data.txt", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data.toString());
//   }
// });

// //Write DATA

// fs.writeFile('employee.txt', 'Employee' ,(err) =>{
//     if (err) {
//         console.log(err)
//     }else{
//         console.log('Data written to file');
//     }
// } )
// // Append DATA
// fs.appendFile("employee.txt", '\n Another Employee', (err) =>{
//     if (err) {
//         console.log(err)
//     } else {
//         console.log("appended")
//     }
// })

fs.unlink('employee.txt', (err) =>{
    if (err) {
        console.log(err)
    } else {
        console.log("File is deleted");
    }
})

console.log("This is an Asyncronous Operation.")