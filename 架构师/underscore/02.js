/*let _ = require("./js/underscore 1.9");
// console.log(_);
console.log(_([1, 2, 3]).map(x => x));
console.log(_.VERSION);

console.log('_');*/

let arr = [1, 2, 3];
let arr2 = ['a', 'b'];

function fn() {
  let arr = ['xianjs'];
  console.log(Array.prototype.push.apply(arr, arguments));
  console.log(arr);
}

let _ = require("./js/underscore 1.9");


//flatten_.flatten(array, [shallow]) 
// 将一个嵌套多层的数组 array（数组） (嵌套可以是任何层数)转换为只有一层的数组。 如果你传递 shallow参数，数组将只减少一维的嵌套。
console.log(_.flatten([1, 2, 3, [[[2, 3, 4]]]], 2, 3, true));