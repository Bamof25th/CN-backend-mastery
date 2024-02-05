const fs = require('fs');
const path = require('path');

const filePath1 = path.join('src', 'home', 'model', 'data.txt');
const filePath = path.resolve('src', 'home', 'model', 'data.txt');
console.log(filePath1)
console.log(filePath);
console.log(path.extname(filePath));
fs.readFile(filePath, (err, data) =>{
    if (err) {
        console.log(err)
    } else {
        console.log(data.toString());
    }
})