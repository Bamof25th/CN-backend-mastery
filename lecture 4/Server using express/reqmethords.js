
const express = require('express');


// Create Server 

const server =  express();

// Listen for default request.(Handel req)

// Get req
server.get( "/" ,(req, res) => {
    res.set('Content-Type', 'text/plane');
     res.send('First Express Server');
});

// Post req
server.post('/',(req, res) =>{
   res.status(201).send("Post Request");
});

// Put req
server.put('/',(req, res) =>{
    res.send("Put Request");
});

// Delete req
server.delete('/',(req, res) =>{
    res.send("Delete Request");
});

// Listen on Specified Port.

server.listen(3100, () =>{
    console.log("Server is running");
});