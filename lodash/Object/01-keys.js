const _ = require("underscore");
let obj = {name: 'xianjs', age: 26, gender: '男'};
let arr = [3, 5, 2];
//检索object拥有的所有可枚举属性的名称。
console.log(_(obj).keys());
//[ 'name', 'age', 'gender' ]
console.log(_.keys(obj));