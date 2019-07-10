const fs = require('fs');
const path = require('path');

//读取的文件
const readFilePath = path.join(__dirname + "/成绩.txt");
//写入的文件
const writeFilePath = path.join(__dirname + "/score.txt");

/*
* 读取文件
* 数据过滤
* 写入问文件
* */
//1.读取文件
/*fs.readFilePath(readFile, 'utf-8', (error, data) => {
  if (error) throw error;
  //2.数据过滤
  data = data.split(' ').filter(x => x != '').toString().replace(/=/g, ':').replace(/,/g, '\n');
  //3.合格数据写入文件
  fs.writeFile(writeFilePath, data, (error) => {
    if (error) throw error;
    console.log('success');
  });
});*/

//基于Promise的读取文件的封装
const readFile = (filePath, encoding = 'utf-8') => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, encoding, (error, data) => {
      if (error) reject(error);//失败的回调处理
      resolve(data);//成功的回调处理
    });
  });
};
const writeFile = (filePath, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, data, (error) => {
      if (error) reject(error);
      resolve('success');
    });
  });
};
const appendFile = (filePath, data) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(filePath, data, (error) => {
      if (error) reject(error);
      resolve('success');
    });
  });
};

module.exports = {
  readFile, writeFile, appendFile,
};