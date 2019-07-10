let fs = require('fs');
let read = url => {
  return new Promise((resolve, reject) => {
    fs.readFile(url, 'utf8', (err, data) => {//回调函数的第一个参数为失败对象
      if (err) {
        reject(err);//动物失败的时候
      }
      resolve(data);//读取成功,使用Promise的成功态
    })
  })
};
read('1.txt').then(data => {
  console.log(data);
}, err => {
  console.log('读取文件失败', err);
});




