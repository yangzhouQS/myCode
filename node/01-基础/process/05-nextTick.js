function foo() {
  console.error('foo');
}

//表示在事件循环（EventLoop）的下一次循环中调用 callback 回调函数
process.nextTick(foo);
console.error('bar');
/*
bar
foo
*/


var http = require('http');

function compute() {
  // performs complicated calculations continuously
  process.nextTick(compute);
}

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World');
}).listen(5000, '127.0.0.1');
compute();


