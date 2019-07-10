let fs = require('fs');
let path = require('path');
let fsPath = path.join(__dirname, 'a.txt');
let data = "世界不是美好的,需要自己的努力!" + "\n";
console.log(path.join(__dirname));//D:\code\typescript\node\01-基础\fs

// 'a' - 打开文件用于追加。如果文件不存在则创建文件。
// 'ax' - 类似 'a'，但如果文件已存在则抛出异常。
// 'a+' - 打开文件用于读取和追加。如果文件不存在则创建文件。
/*
* 第一个参数:文件的路径名称
* 第二个参数:写入的数据
* 第三个参数:打开的方式 a+文件不存在就会创建,内容追加
* 第四个参数:回调函数
*/
/*fs.writeFile(fsPath, data, {flag: 'a+'}, (error) => {
  if (error) {
    console.log("写入内容失败", error);
  }
  console.log('内容写入成功啦..\n');
});
//读取文件的内容
fs.readFile(fsPath, 'utf8', (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
});*/

//以追加的方式写入内容
//fs.appendFile(filename,data,[options],callback);
fs.appendFile(fsPath, data, (err) => {
  if (err) throw Error("write file error");
  console.log('内容写入成功');
});
fs.readFile(fsPath, (error, data) => {
  console.log(data.toString());
});