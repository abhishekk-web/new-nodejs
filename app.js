const http = require('http');

const server = http.createServer((req, res)=> {
    console.log("My name is Abhishek");
})

server.listen(3000);