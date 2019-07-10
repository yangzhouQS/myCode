const { Console } = require('console');
const fs = require('fs');
const path = require('path');

// const output = fs.createWriteStream('./stdout.log');
// const errorOutput = fs.createWriteStream('./stderr.log');
// const logger = new Console(output, errorOutput);
// logger.log('Chris');

// 异步API的回调方法第一个参数一定是err
fs.readFile('./tst.txt', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

// 同步方法会阻塞服务器
// try {
//   console.log(__dirname);
//   fs.readFileSync(path.resolve(__dirname, '../test.txt'));
//   console.log('读取文件成功');
// } catch (error) {
//   console.log(error);
// }

// process.on('exit', (code) => {
//   console.log(`即将退出，推出码：${code}`);
// })

// const result = path.resolve('./');
// console.log(result);

// console.log(path.dirname(result));

// __dirname
// __filename
// exports
// module
// require
// 这些变量是模块作用域中可以直接使用的变量
// 在Node中，每个文件都是一个独立的模块
console.log(abc);