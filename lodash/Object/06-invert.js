const _ = require("underscore");
let arr = [3, 5, 2];
let obj = {name: 'xianjs', age: 26, gender: '男', num: 26};
// invert_.invert(object)
// 返回一个object副本，使其键（keys）和值（values）对换。对于这个操作，必须确保object里所有的值都是唯一的且可以序列号成字符串.
console.log(_.invert(obj));
//{ '26': 'num', xianjs: 'name', '男': 'gender' }
//同名的值后面的会覆盖前面的
