// create aserver using node js


// 1. import http library/module
const http = require('http');

// 2. Create server . 

const server = http.createServer((req, res) =>{
    // Here Comes the request.
    console.log(req.url);
//    res.end('welcome to my application ');// gives error write after end
      res.write('welcome to my application ');
    if (req.url == '/product') {
        // responce end
        return res.end("this iss product page");
        
    }else if ( res.url == '/user'){
        res.end(" is user page");
        return
    }

   // modifying the responce
    res.end("Welcome to Node Js BAM Server");

});

// 3. Sspsecify a port to listen to clients reqests.

server.listen(8080, ()=>{
console.log(" server is listening on port 8080")
});
