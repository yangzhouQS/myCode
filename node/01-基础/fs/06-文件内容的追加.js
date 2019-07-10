let fs = require('fs');
let path = require('path');
let fsPath = path.join(__dirname, './a.txt');
fs.appendFile(fsPath, '---内容的追加---', err => {
  if (err) {
    console.log(err);
  }
  console.log("数据的追加成功啦...");
});


