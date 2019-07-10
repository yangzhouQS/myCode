const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
  let url = req.url.toLowerCase();
  console.log(url);
  res.setHeader("content-type", "text/html;charset=utf-8");
  if (url === '/' || url === '/index') {//首页面
    //读取首页文件进行展示渲染
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile(__dirname + "/index.html", (err, data) => {
      if (err) throw err;
      res.write(data.toString());
      res.end(`世界你好 !`);
    });
  } else if (url === '/login') {//登录界面
    fs.readFile(__dirname + "/login.html", (err, data) => {
      if (err) throw err;
      console.log(data.toString());
      res.write(data.toString())
      res.end();
    });
  } else {//请求失败
    res.writeHead(404, {'Content-Type': 'text/html'});
    res.end("404 not found");
  }
}).listen(3000);
console.log("http://127.0.0.1:3000");
