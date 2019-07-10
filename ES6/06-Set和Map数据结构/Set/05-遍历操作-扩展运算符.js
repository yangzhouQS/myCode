//1 - 扩展运算符（...）内部使用for...of循环，所以也可以用于 Set 结构。
let s = new Set(['red', 'green', 'deeppink']);
console.log(...s);//red green deeppink

//2 - 数组去重
let arr = [1, 2, 3, 3, 2, 1];
console.log(...(new Set(arr)));//1 2 3

//3 - 使用数组的方法
let set = new Set([1, 2, 3]);
console.log([...set].map(x => x * x));//[ 1, 4, 9 ]
console.log(set);//Set { 1, 2, 3 }
console.log([...set].filter(x => x % 2 == 0));//[ 2 ]






