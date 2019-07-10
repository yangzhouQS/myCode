let p = new Promise(resolve => {
  resolve("成功啦...");
});
///一个promise可以then多次
p.then(data => {
  console.log(data);
});
p.then(data => {
  console.log(data);
});
let fs = require('fs');

//是promise
function read(url) {
  return new Promise((resolve, reject) => {
    fs.readFile(url, 'utf8', (err, data) => {
      if (err) {//失败的状态
        reject(err);
      }
      resolve(data);
    })
  })
}

//Promise.all,会返回一个新的promise
/*
* 全部成功才会成功
* 一个失败全部失败
* 并发的
* */
Promise.all([read('1.txt'), read('2.txt')]).then(([r1, r2]) => {
  console.log(r1, r2);
}, err => console.log(err))

/*
* 赛跑race
* 哪个成功就返回哪个,处理多请求只取最快的
* */
console.log('---------');
Promise.race([read('1.txt'), read('2.txt')]).then((data) => {
  console.log(data);
});
/*
* Promise.resolve:上来就成功啦
* Promise.reject:上来就失败啦
* */
Promise.resolve('123').then(data => console.log(data), err => console.log(err));
Promise.reject('上来就失败啦').then(data => console.log(data), err => console.log(err));