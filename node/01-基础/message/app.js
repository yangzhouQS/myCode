const fs = require('fs');
const http = require('http');
const url = require('url');
http.createServer((req, res) => {
  //当前的请求地址
  let curUrl = req.url;
  if (curUrl === '\/' || curUrl === "\/index") {
    fs.readFile('./view/index.html', (err, data) => {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        console.log(err.toString());
      }
      res.setHeader("content-type", "text/html;charset=utf-8");
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      res.end();
    })
  } else if (curUrl === '/add') {//添加

  } else if (curUrl == '/edit') {
  } else {
    data = '404错误';
  }
  console.log(curUrl);

}).listen(3000);
console.log("http://127.0.0.1:3000");


