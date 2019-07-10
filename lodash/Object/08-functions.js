const _ = require("underscore");
let arr = [3, 5, 2];
let obj = {name: 'xianjs', age: 26, gender: '男'};
// functions_.functions(object) Alias: methods
// 返回一个对象里所有的方法名, 而且是已经排序的 — 也就是说, 对象里每个方法(属性值是一个函数)的名称.
let p={
  say(){},
  say3(){},
  say2(){}
};
console.log(_.functions(p));
// [ 'say', 'say2', 'say3' ]
console.log(_.functions(_));
