const fs = require('fs');
let data = "世界你好吗";
fs.writeFile('nihao.txt', data, err => {
  if (err) {
    console.log("写入失败,", err.toString());
    return;
  } else {
    console.log('成功啦...');
  }
})


