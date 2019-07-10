let fs = require('fs');
fs.readFile('1.txt', 'utf8', (err, data) => {
  if (err) {
    throw new Error(err.toString());
  }
  //console.log(data.toString());
  fs.readFile(data, 'utf8', (err, data) => {//一直回调下去
    if (err) {
      throw new Error(err.toString());
    }
    console.log('1----', data.toString());
  });
});
console.log('===================Promise====================');
const path = require('path');

//是promise
function read(url) {
  return new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, url), 'utf8', (err, data) => {
      if (err) {//失败的状态
        reject(err);
      }
      resolve(data);
    });
  });
}

read('./1.txt').then(data => {
  console.log(data);
  return read(data);//可以链式调用
}, (err) => {
  console.log(err);
}).then(data => {//第二次的链式调用
  console.log('2---', data);
}, err => {
  console.log(err);
});



