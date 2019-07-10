const fs = require('fs');
const path = require('path');
/*
fs.copyFile(path.normalize(__dirname + "/a.txt"), __dirname + "/news/a_backup20190308.txt", (error, res) => {
  if (error) throw error;
  console.log('OK,拷贝成功啦~~~~');
});

console.log("D:\\code\\WEB\\express\\demo04");*/

fs.copyFile(path.join(__dirname + "/a.txt"), path.join(__dirname + "/news/a.txt"), (error) => {
  if (error) throw error;
  console.log("ok");
});
console.log(path.join(__dirname + "/a.txt"));