let fs = require('fs');
fs.readFile('a.txt', (err, data) => {
  if (err) {
    console.log(err);
  }
  //a文件读取成功,再次读取b文件,使用回调函数来获取读取成功的信息
  console.log("b文件的名称:", data.toString());
  fs.readFile(data, (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data.toString());
  });
});