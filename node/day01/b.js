const tools = require('./nodeTools');
const file = __dirname + "./a.txt";
const data = new Uint8Array(Buffer.from('Node.js中文网'));
tools.appendFile("./a.txt", 'data').then(res => {
  console.log(res);
}).catch(error => {
  console.log(error);
});
