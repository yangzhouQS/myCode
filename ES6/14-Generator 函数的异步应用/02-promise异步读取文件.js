let fs = require('fs');
let read = fileUrl => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileUrl, (err, data) => {
      if (err) {//读取失败,等待态转换为失败态
        reject(err);
      }//读取成功,有等待态转换为成功态
      resolve(data);
    })
  });
};
read('a.txt').then(data => {
  console.log(data.toString());//读取文件的内容
  return read(data);//继续读取文件
}, error => {
  console.log(error);
}).then(data => {
  console.log(data.toString());
});