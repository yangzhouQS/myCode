const _ = require('lodash');
//drop
//创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
let arr = [2, 4, 6, 1, 6, 7, 8, 9];
console.log(_.drop(arr, 3));//返回剩余的切片
console.log(_.drop(arr));//默认切去一个元素


