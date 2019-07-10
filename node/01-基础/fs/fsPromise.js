let fs = require('fs');
let path = require('path');
let readFile = (fileName) => {
  //将传入的文件进行绝对路径的处理
  fileName = path.resolve(path.resolve(), fileName);
  console.log(fileName);
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};
// module.exports.readFile = readFile;
module.exports = {
  readFile
};

