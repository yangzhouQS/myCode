let fs = require('fs');
//回调函数解决异步问题
fs.readFile('2.txt', (err, data) => {
  if (err) {//错误处理
    throw new Error('错误')
  }
  console.log(data.toString());
});
