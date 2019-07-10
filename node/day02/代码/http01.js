const fs=require('fs');
const http=require('http');


let server = http.createServer((req,res)=>{
  res.end("Hello word");
}).listen(3000);
console.log('http://127.0.0.1:3000');