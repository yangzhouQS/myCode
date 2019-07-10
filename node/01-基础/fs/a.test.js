// let A = require('./a');
// console.log(A.func(7, 8));
const fs = require('fs');
const path = require('path');
let filePath = path.join(__dirname, '/nihao.txt');


fs.readFile(filePath, (error, data) => {
  /*
  * 1.读数据
  * 2.数据清洗
  * 3.数据写入
  * */
  if (error) throw error;
  data = data.toString().split(' ').filter(x => x != '');
  data = data.toString().replace(/,/gi, '\r\n');
  fs.writeFile(__dirname + '/score.txt', data.toString(), err => {
    if (err) throw  err;
    console.log("写入文件OK");
  });
  console.log(data.toString().replace(/,/gi, '\r\n'));
})
