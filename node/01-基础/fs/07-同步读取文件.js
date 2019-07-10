let fs = require('fs');
let path = require('path');
let fsPath = path.join(__dirname, './a.txt');
console.log('--异步读取文件-开始');
fs.readFile(fsPath, (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});
console.log('--异步读取文件-结束');


/*console.log('--同步读取前');
try {
  let data = fs.readFileSync(fsPath);
  console.log(data.toString());
} catch (e) {
  console.log('文件读取失败');
}
console.log('--同步读取后---');*/


