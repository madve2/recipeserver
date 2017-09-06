const http = require('http');
const recipes = require('./recipes');

let localPort = 8081;
let port = process.env.PORT || localPort;

http.createServer(function(req, res){
    let body = JSON.stringify(recipes);
    res.writeHead(200, {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'X-Requested-With', 'Content-Type': 'text/html','Content-Length':body.length});
    
    setTimeout(function() {
        res.write(body);
        res.end();
    }, 5000);
}).listen(port);

console.log(`Recipe server running at http://localhost:${port}/`);