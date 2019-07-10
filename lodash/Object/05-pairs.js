const _ = require("underscore");
let arr = [3, 5, 2];
let obj = {name: 'xianjs', age: 26, gender: '男'};
// pairs_.pairs(object)
// 把一个对象转变为一个[key, value]形式的数组。object 逆向函数。
console.log(_.pairs(obj));
//[ [ 'name', 'xianjs' ], [ 'age', 26 ], [ 'gender', '男' ] ]
