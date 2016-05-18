var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    fs.readFile('recipes.txt',function (err, data){
        res.writeHead(200, {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': 'X-Requested-With', 'Content-Type': 'text/html','Content-Length':data.length});
        
        setTimeout(function() {
          res.write(data);
          res.end();
        }, 5000);
    });
}).listen(8081);

console.log("Recipe server running at http://localhost:8081/");