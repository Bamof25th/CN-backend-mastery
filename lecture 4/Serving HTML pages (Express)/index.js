const express = require('express');

// Server.
const server = express();

// request handeler.
server.get('/', (req, res)=>{
    return res.send('welcome to express')
});

// my ststic files are in public folder which can be accessed directly.(http://localhost:3300/home.html)
server.use(express.static('public'));

// Listen on port 3300.
server.listen(3300 , ()=>{
    console.log('server is listening to port 3300')
});