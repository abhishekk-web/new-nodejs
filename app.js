const http = require('http');

const server = http.createServer((req, res)=> {

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    if(req.url == "/home"){
        res.write('<body><h1>Welcome to the home page</h1></body>');
    }
    if(req.url == "/about"){
        res.write('<body><h1>Welcome to the About page</h1></body>');

    }
    if(req.url == "/node"){
        res.write('<body><h1>Welcome to My node project</h1></body>');

    }
    res.end();

})

server.listen(3000);