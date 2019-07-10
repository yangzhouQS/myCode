const fs = require("fs");
const read = urlName => {
  return new Promise((resolve, reject) => {
    fs.readFile(urlName, 'utf8', (err, data) => {
      if (err) {//读取失败
        reject(err);
      } else {//读取成功
        resolve(data);
      }
    })
  })
};

read('1.txt').then(data => {
  console.log(data);
  return read('2.txt')
}).then(data => {
  console.log(data);
  return read('3.txt');
}).then(data => {
  console.log(data);
});


