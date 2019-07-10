// console
// global
// process
// Buffer
// clearImmediate
// clearInterval
// clearTimeout
// setImmediate
// setInterval
// setTimeout
// http
const http = require('http');
const querystring = require('querystring');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  let result = querystring.parse(req.url.split('?')[1]);
  console.log(result);
  // if (。。。)
  let source = Buffer.from(result.name, 'uft-8');
  let target = source.toString('hex');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log('起飞了!');
})