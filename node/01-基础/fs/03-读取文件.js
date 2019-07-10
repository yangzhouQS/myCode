let fs = require('fs');
let path = require('path');
let fsPath = path.join(__dirname, './nihao.txt');
/**
 * 第一个参数为文件的路径及其名称,
 * 第二个参数为文件的编码,
 * 第三个参数为回调函数,回调函数的第一个参数为错误回调参数,第二个参数为成功的回调参数,及返回的数据
 */
fs.readFile(fsPath, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});


