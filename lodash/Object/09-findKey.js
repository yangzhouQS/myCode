const _ = require("underscore");
let arr = [3, 5, 2];
let obj = {name: 'xianjs', age: 26, gender: '男'};
// findKey_.findKey(object, predicate, [context])
// 类似于_.findIndex ，但用于对象中的 key（键）。返回通过predicate 真值测试的 key ，否则返回 undefined 。 predicate 通过 iteratee 进行转换，以简化速记语法。
console.log(_.findKey(obj, 'age'));
