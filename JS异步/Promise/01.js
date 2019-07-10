let fs = require("fs");
let http = require("http");
http.createServer(function (req, response) {
  fs.readFile('a.txt', function (err, data) {
    if (err) {
      console.log(err.toString());
      response.writeHead(404, {'Content-Type': 'text/html'});
    } else {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write(data.toString());
    }
    response.end();
  })
}).listen(3000);
console.log("http://127.0.0.1:3000");



