const _ = require('lodash');
// 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
let arr = [2, 4, 6, 1, 6, 7, 8, 9];
console.log(_.chunk(arr,3));
//[ [ 2, 4, 6 ], [ 1, 6, 7 ], [ 8, 9 ] ]