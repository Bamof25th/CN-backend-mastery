// Please don't change the pre-written code

const express = require("express");
const server = express();

// Write your code here
// Get req
server.get( "/" ,(req, res) => {
    res.send('get');
});

// Post req
server.post('/',(req, res) =>{
   res.send("post");
});

// Put req
server.put('/',(req, res) =>{
   res.send("put");
});

// Delete req
server.delete('/',(req, res) =>{
   res.send("delete");
});

module.exports = server;
