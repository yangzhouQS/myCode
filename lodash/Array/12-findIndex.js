const _ = require('lodash');
let arr = [2, 4, 6, 1, 6, 7, 8, 9];
// 该方法类似_.find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身。
console.log(_.findIndex(arr,4));

