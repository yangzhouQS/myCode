/*

除了listening事件外，TCP服务器还支持以下事件：
connection：当有新的连接创建时触发，回调函数的参数为socket连接对象。
close：TCP服务器关闭的时候触发，回调函数没有参数
error：TCP服务器发生错误的时候触发，回调函数的参数为error对象
* */

let net = require("net");
let server = new net.Server();

//新的连接创建时触发,回调函数为socket连接对象
server.on('connection', (socket) => {
  console.log("连接上了...", socket);
});
//设置监听端口
server.listen(3000);
//监听时的回调函数
server.on('listening', function () {
  console.log('http://localhost:3000');
});
//设置关闭时的回调函数
server.on('close', function () {
  console.log("服务端关闭...");
})
//发生错误时回调函数
server.on('error', function (err) {
  console.log('err');
});


