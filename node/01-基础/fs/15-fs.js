const fs = require("fs");
let { readFile } = require("./fsPromise");
/*fs.readFile("./a.txt", "utf-8", (error, data) => {
  if (error) throw Error(error);
  console.log(data);
});*/

//覆盖原来的内容
/*fs.writeFile("./nihao.txt", "测试  测试", error => {
  if (error) {
    console.log(error);
  }
  console.log("写入成功");
});*/

fs.appendFile("./nihao.txt", "A:100       B:200          C:300               D:5000\n", error => {
  if (error) {
    console.log(error);
  }
  console.log("OK");
});

console.log("----开始读取");
readFile("./nihao.txt").then(data => {
  console.log(data);
}).catch(error => {
  console.log(error);
});