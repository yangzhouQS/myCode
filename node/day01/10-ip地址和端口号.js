// ip 地址用来定位计算机
// 端口号用来定位具体的应用程序
// 所有需要联网通信的应用程序都会占用一个端口号
const http = require('http');
const fs = require('fs');
let server = http.createServer();
server.on("request", function (req, res) {
  console.log(req.socket.remoteAddress);//端口
  console.log(req.socket.remotePort);//ip地址
  console.log('request请求');
  res.end('xianjs');
});
server.listen(3000);
console.log('http://127.0.0.1:3000');

