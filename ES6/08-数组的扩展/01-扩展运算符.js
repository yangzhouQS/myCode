// 扩展运算符（spread）是三个点（...）。它好比 rest 参数的逆运算，将一个数组转为用逗号分隔的参数序列。
let arr = [1, 2, 3, 4];
console.log(...arr);
console.log(...[1, 2, ...[3, 4, ...[4, 5, ...[6, 7]]]]);
//1 2 3 4 4 5 6 7

// 扩展运算符后面还可以放置表达式。
let x = 1;
const arr2 = [
  ...(x > 0 ? ['a'] : []),
  'b',
];
console.log(arr2);//[ 'a', 'b' ]

// 扩展运算符与正常的函数参数可以结合使用，非常灵活。
function f(v, w, x, y, ...z) {
  return [v, w, x, y, z];//剩余的索引参数保存在z,参数剩余
}

const args = [0, 1];
console.log(f(-1, ...args, 2, ...[3, 4, 5]));
//[ -1, 0, 1, 2, [ 3, 4, 5 ] ]

//注意，扩展运算符如果放在括号中，JavaScript 引擎就会认为这是函数调用，否则就会报错。
// (...[1,2]);//SyntaxError: Unexpected number

// console.log((...[1,2]));
console.log(...[1,2]);


