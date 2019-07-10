const fs = require('fs');
/**
 * readFile()
 * 第一个参数为读取文件的路径
 * 第二个参数为可选的
 * 第三个参数为回调函数(错误,读取的数据)
 */
fs.readFile(__dirname + "/a.txt", (err, data) => {
  if (err) throw err;
  //读取的数据为二进制的字符
  console.log(data.toString());
});

