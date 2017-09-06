let http = require('http');
let fs = require('fs');

let localPort = 8081;
let port = process.env.PORT || localPort;

http.createServer(function(req, res){
    fs.readFile('./recipes.txt',function (err, data){
        let response = data;
        if (err) {
            console.log(err);
            data = "Oops."
        }

        res.writeHead(err ? 500 : 200, {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'X-Requested-With', 'Content-Type': 'text/html','Content-Length':data.length});
        
        setTimeout(function() {
          res.write(data);
          res.end();
        }, 5000);
    });
}).listen(port);

console.log(`Recipe server running at http://localhost:${port}/`);