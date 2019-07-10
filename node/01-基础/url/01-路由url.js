let http = require("http");
let fs = require('fs');
let url = require('url');
http.createServer((req, res) => {
  // let pathName = url.parse(req.url).pathname;
  res.setHeader("content-type", "text/html;charset=utf-8");
  res.write('测试');
  console.log('头信息-对象', req.headers);
  console.log('头信息-数组', req.rawHeaders);
  console.log('http版本 = ', req.httpVersion);
  console.log('请求的方法 = ', req.method);
  console.log('请求的路径  =', req.url);
}).listen(3000);
console.log("http://127.0.0.1:3000");


