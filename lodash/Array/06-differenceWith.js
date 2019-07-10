const _ = require('lodash');
let arr = [2, 4, 6, 1, 6, 7, 8, 9];
//differenceWith
// 这个方法类似_.difference ，除了它接受一个 comparator （愚人码头注：比较器），它调用比较array，values中的元素。 结果值是从第一数组中选择。comparator 调用参数有两个：(arrVal, othVal)。


var objects = [{'x': 1, 'y': 2}, {'x': 2, 'y': 1}];

_.differenceWith(objects, [{'x': 1, 'y': 2}], _.isEqual);
// => [{ 'x': 2, 'y': 1 }]
