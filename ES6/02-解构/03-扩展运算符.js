/*
* 扩展运算符:...
* 可以将数据组/对象展开为参数列表
* */

//1 - 展开数组
let arr = [1, 2, 4, 5];
console.log(...arr);

//2 - 求数组的最大值
console.log(Math.max(...arr));
let obj = {name: 'xx', age: 26};

//3 - 数组的合并
let arr2 = [...arr, ...[1, 2, 'd']];
console.log(arr2);

//4 - 对象的合并
let obj2 = {...obj, ...{sex: '男'}};
console.log(obj2);//{ name: 'xx', age: 26, sex: '男' }

