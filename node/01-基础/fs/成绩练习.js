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
/*fs.readFile(readFilePath, 'utf-8', (error, data) => {
  if (error) throw error;
  //2.数据过滤
  data = data.split(' ').filter(x => x != '').toString().replace(/=/g, ':').replace(/,/g, '\n');
  //3.合格数据写入文件
  fs.writeFile(writeFilePath, data, (error) => {
    if (error) throw error;
    console.log('success');
  });
});*/

