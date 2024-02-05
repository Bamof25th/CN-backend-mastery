// CRUD

// import modules


const fs = require('fs');

// to read file using Blocking code

// console.log("Starting to read File");


// const buffer = fs.readFileSync('data.txt', {encoding: 'utf8'}) // it i a input output operation it takes some time. 

// console.log(buffer)



// Creating and Writing a File.
try{
    
    fs.writeFileSync("employee.txt", "Name: John Faul , Age: 40, Position: Manager")

}catch(err){
    console.log(err)
}
// Appending aniother employee data

fs.appendFileSync("employee.txt", "Name: Neymar , Age: 35, Position: lw")



// Deleteing a File 
try {
    fs.unlinkSync('employee.txt');
} catch (err) {
    console.log("file does not exist")
}


console.log('This is another operation being performed');

