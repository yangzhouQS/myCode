let net = require('net');
//直接监听指定的端口
let server = net.createServer();//实例化服务器
/*server.listen(3000, () => {
  console.log("http://localhost:3000");
})*/
//等同于下面的代码
server.on('listening', () => {
  console.log("http://localhost:3000");
});



