const _ = require('lodash');
//dropRightWhile
//创建一个切片数组，去除array中从 predicate 返回假值开始到尾部的部分。predicate 会传入3个参数： (value, index, array)。
let arr = [2, 4, 6, 1, 6, 7, 8, 9];
let users = [
  {'user': 'barney', 'active': true},
  {'user': 'fred', 'active': false},
  {'user': 'pebbles', 'active': false}
];
console.log(_.dropRightWhile(users, (x) => !x.active));
