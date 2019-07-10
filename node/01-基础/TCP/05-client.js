let net = require('net');
//1 - 创建TCP服务器
/*let server = net.createServer(function () {
  console.log("TCP服务创建成功..");
});*/

//2 - 可以直接使用connection参数,TCP服务创建成功时触发
let server = net.createServer();
//监听connection
server.on('connection', socket => {
  console.log('connection');
  console.log(socket);
});

server.listen(3000, 'localhost', function () {
  console.log('http://localhost:3000');
});

