const http = require("http");
http.createServer((req, res) => {
  //请求的判断
  let msg = null;
  if (req.url === "/") {
    msg = "请求的是/";
    res.setHeader("content-type", "text/html;charset=utf-8");
    res.writeHead(200);
  } else if (req.url === "/index") {
    msg = "首页 index";
  } else {
    msg = "404";
  }
  res.write(msg);
  res.end("<h1>hello  word</h1>");
}).listen(3000);
console.log("http://127.0.0.1:3000");


