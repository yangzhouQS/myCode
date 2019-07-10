const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");

http.createServer((req, res) => {
  if (req.url != "favicon.ivo") {
    let { pathname } = url.parse(req.url, true);
    let apathname = pathname.split("/")[1];
    res.writeHead(200, { "Content-Type" : "text/html;charset=utf-8" });
    if (pathname == "" || pathname == "/" || pathname == "/index") {
      res.write("<h1>首页</h1>");
    } else if (pathname == "/cart") {
      res.write("<h1>购物车</h1>");
    } else if (pathname == "/login") {
      res.write("<h1>登录</h1>");
    } else if (pathname == "/list") {
      res.write("<h1>列表</h1>");
    } else {
      res.write("404 not found");
    }
    res.end();
  }
}).listen(3000);
console.log("http://localhost:3000");
