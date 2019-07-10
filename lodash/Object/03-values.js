const _ = require("underscore");
let arr = [3, 5, 2];
let obj = {name: 'xianjs', age: 26, gender: '男'};
//返回object对象所有的属性值。
console.log(_.values(obj));
//[ 'xianjs', 26, '男' ]