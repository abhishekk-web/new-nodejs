const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=> {

    
    const body = [];
    
    const url = req.url;
    const method = req.method;

    if(url==="/"){

        // const filePath = path.join(__dirname, "messages.txt");

        fs.readFile("message.txt", {encoding: "utf-8"}, (err, data)=>{
            if(err){
                console.log(err);
            }
            console.log("the data is "+ data);
        res.write("<html>");
        res.write("<head><title>Welcome home</title></head>");
        res.write(`<body><h1>${data}</h1></body>`)
        res.write('<body><form action="/message" method="POST"><input id="message" type="text" name="message"><button>Send</button></form><body>');
        res.write("</html>");

        return res.end();
        });

    }



    else if(url==="/message" && method==='POST'){

        req.on('data', (chunk)=>{
        const newBody =    body.push(chunk);
        console.log(newBody);

        });


        return req.on('end', ()=> {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        fs.writeFile('message.txt', message, (err)=>{
            if(err){

                console.log(err);

            }

        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
        });
    });


    }
    else{
    res.setHeader('Content-header', 'text/html');
    res.write("<html>");
    res.write("<head><title>Welcome to About Us page</title></head>");
    res.write("<body><h1>Welcome to About Us page</h1></body>");
    res.write("</html>");
    res.end();
    }

})

server.listen(3000);