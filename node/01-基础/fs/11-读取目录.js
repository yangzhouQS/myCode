const fs = require('fs');
const path = require('path');
//fs.readdir(path, callback);

/**
 * path, 要读取目录的完整路径及目录名；
 * [callback(err, files)], 读完目录回调函数；err错误对象，files数组，存放读取到的目录中的所有文件名
 */
let dir = '/demo';
fs.readdir(__dirname + dir, (err, files) => {
  if (err) throw err;
  console.log(files);
  reaDirAndFile(files, dir);
  files.forEach(file => {
    let filePath = path.normalize(__dirname + dir + '/' + file);
    /*
    * 判断文件是普通文件还是目录
    * */
    fs.stat(filePath, (err, stats) => {
      if (err) throw err;
      if (stats.isFile()) {
        console.log("-" + dir + `/${file}是文件`);
      } else if (stats.isDirectory()) {
        console.log("+" + dir + `/${file}目录`);
      }
    })
    // console.log(filePath);
  })
});


/*
let reaDirAndFile = function (fileArr, dir) {
  fileArr.forEach(file => {
    let filePath = path.normalize(__dirname + dir + '/' + file);
    /!*
    * 判断文件是普通文件还是目录
    * *!/
    fs.stat(filePath, (err, stats) => {
      if (err) throw err;
      if (stats.isFile()) {
        console.log("-" + dir + `/${file}是文件`);
      } else if (stats.isDirectory()) {
        console.log("+" + dir + `/${file}目录`);
        // reaDirAndFile(file, dir);
        console.log(path.normalize(__dirname + dir + "/" + file));
        // reaDirAndFile(path.normalize(__dirname + dir + "/" + file), dir);
      }
    })
  })
}*/
