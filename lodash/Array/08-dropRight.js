const _ = require('lodash');
//dropRight
//创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）

let arr = [2, 4, 6, 1, 6, 7, 8, 9];
console.log(_.dropRight(arr, 2));//[ 2, 4, 6, 1, 6, 7 ]
console.log(_.dropRight(arr,5));//[ 2, 4, 6 ]


