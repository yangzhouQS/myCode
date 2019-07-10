/*
* 回调地狱的解决方案
* 1 - 事件发布订阅来实现
* */
let fs = require("fs");
let EventEmitter = require('events');
/*
* on:表示注册事件
* emit:表示发射事件
* */
let eve = new EventEmitter();
// let html = {};
/*
eve.on('ready', function (key, value1) {
  html[key] = value1;
  if (Object.keys(html).length === 2) {
    console.log(html);
  }
});
fs.readFile('1.txt', function (err, data) {
  //事件名称,后面的参数是传递给回调函数的参数
  eve.emit('ready', '1.txt', data.toString());
});
fs.readFile('2.txt', function (err, data) {
  //事件名称,后面的参数是传递给回调函数的参数
  eve.emit('ready', '2.txt', data.toString());
});

*/
//改进
/*let html = {};
let done = (key, value) => {
  html[key] = value;
  if (Object.keys(html).length === 2) {//参数写死啦,不灵活
    console.log(html);
  }
}*/
function render(length, cb) {
  let html = {};
  return function (key, value) {
    html[key] = value;
    if (Object.keys(html).length === length) {
      cb(html);
    }
  }
}

let done = render(2, function (html) {
  console.log(html);
});

fs.readFile('1.txt', (err, data) => {
  done('1.txt', data.toString());
});
fs.readFile('2.txt', (err, data) => {
  done('2.txt', data.toString());
});


