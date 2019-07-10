const http = require('http');
const url = require('url');
/*
创建服务器的步骤
  1.导入http的核心模块
  2.车间server的实例
  3.监听客户端的request请求
  4.绑定服务的端口
*/
http.createServer((req, res) => {
  //设置响应的编码格式
  res.setHeader("content-type", "text/html;charset=utf-8");
  //获取请求的参数和路径
  // let urlObj = url.parse(req.url, true);
  // if (urlObj.path==='/index'){
  //   res.send("index首页")
  // }
  // else{
  //   res.send('404 Not Found');
  // }
  // res.end('<h1>学习nodeJS</h1>');
  res.end('xxx')
}).listen(3000);
console.log('http://127.0.0.1:3000');

