
const express = require('express');


// Create Server 

const server =  express();

// Listen for default request.(Handel req)

server.get( "/" ,(req, res) => {
     res.send('First Express Server');
});

// Listen on Specified Port.

server.listen(3100, () =>{
    console.log("Server is running");
});