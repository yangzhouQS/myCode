let http = require('http');
let server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html;charset=utf-8");
  res.end("3000端口启动成功啦.......");
});
server.listen(3000, 'localhost', () => {
  console.log('http://localhost:3000');
});


