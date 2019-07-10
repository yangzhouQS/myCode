//generator函数读取文件

const fs = require('fs');
const read = fileName => {
  return new Promise((resolve, reject) => {
    fs.read(fileName, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
};

function* show() {
  yield read("1.txt");
  yield read("2.txt");
  yield read("3.txt");
}

const s = show();
s.next().value.then(data => {
  console.log(data.toString());
  return s.next().value;
}).then(data => {
  console.log(data.toString());
  return s.next().value;
}).then(data => {
  console.log(data.toString());
})




