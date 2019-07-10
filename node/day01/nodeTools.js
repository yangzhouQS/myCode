const fs = require('fs');
const http = require('http');
const path = require('path');
/**
 * 路径的处理
 * @param filePath
 * @returns {*|string|*}
 */
const pathNormalize = filePath => path.normalize(filePath);

/**
 * 读取文件内容,返回的是Promise对象
 * @param filePath 操作文件的名称
 * @param encoding 可选编码,默认为utf-8
 * @returns {Promise<any>}
 */
const readFile = (filePath, encoding = 'utf-8') => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, encoding, (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};
/**
 * 文件内容的写入,成功返回success
 * @param filePath 文件的路径
 * @param data 写入的数据
 * @returns {Promise<any>}
 */
const writeFile = function (filePath, data = '') {
  return new Promise((resolve, reject) => {
    fs.writeFile(path.normalize(filePath), data, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve('success');
      }
    });
  });
};
/**
 * 异步地将数据追加到文件，如果文件尚不存在则创建该文件。 data 可以是字符串或 Buffe
 * @param filePath
 * @param data
 * @returns {Promise<any>}
 */
const appendFile = (filePath, data = '') => {
  return new Promise((resolve, reject) => {
    fs.appendFile(pathNormalize(filePath, data, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve('success');
      }
    }));
  });
};


/**
 * 对象转换为字符串 =>序列化
 * @param obj
 * @returns {string}
 */
const toJsonString = function (obj) {
  return JSON.stringify(obj);
};
/**
 * json字符串的序列化
 * @param str
 * @returns {any}
 */
const toJsonParse = function (str) {
  return JSON.parse(str);
};

//路径的操作
const open = (filePath, flag = 'r') => {
  return new Promise((resolve, reject) => {
    fs.open(pathNormalize(filePath, flag, (error, fd) => {
      if (error) {
        reject(error)
      } else {
        resolve(fd);
      }
    }))
  });
};
open('./a.txt')

module.exports = {
  readFile,
  writeFile,
  appendFile,

  toJsonString,
  toJsonParse,
}