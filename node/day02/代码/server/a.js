console.log('a开始');
exports.finish = false;
const b = require('./b');
console.log('在a中b的属性：', b.finish);
exports.finish = true;
console.log('a结束');

// 定义全局变量
// global.test = 'Chris';

// console.log(this);// 浏览器中 => window，Node中不是global
// console.log(exports);
// 快捷方式
// exports