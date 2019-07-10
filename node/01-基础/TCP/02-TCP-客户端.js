//TCP客户端
let net = require("net");
//实例化服务器对象
let server = net.createServer(socket => {
  console.log("socket 客户端");
})

server.listen(3000, () => console.log("http://localhost:3000"));


