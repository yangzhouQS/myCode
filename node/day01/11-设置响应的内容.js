const http = require('http');
http.createServer((req, res) => {
  /*
  * 设置响应内容的编码格式
  * */
  res.setHeader("content-type", "text/html;charset=utf-8");
  res.write("<h1>世界你好</h1>");
  res.end("<br> 实际不是很好的??");
}).listen(3000);
