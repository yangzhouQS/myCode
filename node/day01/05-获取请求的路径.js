const http = require('http');
const fs = require('fs');
const path = require('path');
/*
* 1.http.createServer():返回的是httpServer的实例
* 2.处理请求和响应
* 3.提供服务
* res.setHeader()设置响应的编码格式
* res.write():设置响应的内容
* server.listen(3000):设置客户端监听的端口
* */
let server = http.createServer((req, res) => {
  //将请求的路径写入页面
  console.log(req.url);
  res.write(req.url);
  res.end();//结束响应
});
server.listen(3000);
console.log('http://127.0.0.1:3000');

