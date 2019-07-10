const fs = require('fs');
/**
 * writeFile()
 * 第一个参数为要写入文件的路径
 * 第二个参数为写入文件的内容
 * 第三个问文件写入的错误回调函数
 */
fs.writeFile(__dirname + "/a.txt", "xianjs学习node", (err) => {
  if (err) throw err;
  console.log("文件内容写入成功");
});

