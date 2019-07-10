const fs = require('fs');
const path = require('path');
//fs.exists(path, callback);
/*
 * path, 要查看目录/文件的完整路径及名；
 * [callback(exists)], 操作完成回调函数；exists true存在，false表示不存在
 */
fs.exists(__dirname + "/a.txt", exists => {
  console.log(exists);
});
let fsIsExists = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.exists(filePath, exists => {
      if (exists) {
        resolve(exists);
      } else {
        reject(exists);
      }
    });
  });
}
// console.log("-", fsIsExists(__dirname + "/a.txt"));
fsIsExists(__dirname + "/a.txt").then(res => {
  console.log(res);
})

