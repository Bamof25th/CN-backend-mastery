// import the library
const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res)=>{
    
    const data = fs.readFileSync('index.html').toString()
    
    res.end(data);
})


server.listen(3100);

console.log("workss")