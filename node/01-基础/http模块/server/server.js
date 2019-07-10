const http = require("http");
const url = require("url");
const route = require("./route/route.js");

const server = http.createServer((req, res) => {
  if (req.url !== "/favicon.ico") {
    res.writeHead(200, { "Content-Type" : "text/html;charset=utf-8" });
    let { pathname } = url.parse(req.url);
    pathname = pathname.split("/")[1];
    try {
      route[pathname](req, res);
    } catch ( e ) {
      //TODO handle the exception
      route["page404"](req, res);
    }
  }
});

server.listen(3000);
