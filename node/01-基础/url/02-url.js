const http = require("http");
const url = require("url");
const server = http.createServer((req, res) => {
    if (req.url == "/favicon.ico") {
      res.writeHead(200, { "Content-Type" : "text/html" });
    }
    res.write(`req.url = ${req.url}  === url.parse = ${JSON.stringify(url.parse(req.url))}`);
    console.log(url.parse(req.url, true));//获取参数
    res.end();
  })
;
server.listen(3000);
console.log("http://127.0.0.1:3000");


