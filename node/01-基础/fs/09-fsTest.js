let fs = require('fs');
/*
* 1.fs.mkdir()创建目录
*   fs.mkdir(path[, options], callback)
* */
/*fs.mkdir('./less', (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('ok,创建成功');
});*/
/*
* 2.读取目录的内容
* fs.readdir(path[, options], callback)
* callback <Function>
  err <Error>
  files <string[]> | <Buffer[]> | <fs.Dirent[]>
* */
/*fs.readdir('./', (err, data) => {
  if (err) {
    console.log(err);
    return
  }
  for (const fileName of data) {
    console.log(__dirname + fileName);
  }
});*/
/*
* 3.删除文件夹
*   fs.rmdir(path, callback)
*   不可以删除非空的文件夹:directory not empty
* */
/*
fs.rmdir('./less', err => {
  if (err) {
    console.log(err);//directory not empty
    return;
  }
});*/

/*
* 4.异步地读取文件的全部内容
*   fs.readFile(path[, options], callback)
*     options =>如果没有指定 encoding，则返回原始的 buffer。
*     设置为utf8,直接返回的是字符串
* */
/*fs.readFile('./a.txt', 'utf8', (err, data) => {
  if (err) return;
  console.log(data);
});*/
/*
* 5.异步地将数据写入到文件，如果文件已存在则覆盖该文件。 data 可以是字符串或 buffer。
* fs.writeFile(file, data[, options], callback)
*   callback <Function>
*     err <Error>
*  覆盖的形式写入
* */
/*let data = 'DSB';
fs.writeFile('./a.txt', 'DSB', err => {
  if (err) {
    console.log(err);
    return err;
  }
});*/
/*
* 6.异步地将数据追加到文件，如果文件尚不存在则创建该文件。
* fs.appendFile(path, data[, options], callback)
* callback <Function>
*     err <Error>
* */

/*let data = 'DSB\n';
fs.appendFile('./a.txt', data, (err) => {
  if (err) {
    console.log(err);
    return false;
  }
});*/

/*
* 7.异步地删除文件或符号链接。
*   fs.unlink(path, callback)
* */
/*
fs.unlink('./less/a.txt', err => {
  if (err) {
    console.log("删除失败", err);
    return;
  }
});*/

/*
* 8.文件拷贝
*   fs.copyFile(src, dest[, flags], callback)
*
* */
// 默认情况下将创建或覆盖目标文件。
/*fs.copyFile('源文件.txt', '目标文件.txt', (err) => {
  if (err) throw err;
  console.log('源文件已拷贝到目标文件');
});*/


let path = require('path');
//path.resolve()返回当前模块的绝对路径,不包含文件名称
// console.log(path.resolve());//D:\Code\typescript\node\01-基础\fs

//绝对路径的拼接
// console.log(path.resolve(__dirname, 'less/a.txt'));
//D:\Code\typescript\node\01-基础\fs\less\a.txt


//两个参数都是绝对路径的时候只会使用最后一个参数
// console.log(path.resolve(`${__dirname }/less`, `${__dirname}/less/a.txt`));


let fsPromise = require('./fsPromise');
fsPromise.readFile('a.txt').then((err, data) => {
  console.log(data);
});
