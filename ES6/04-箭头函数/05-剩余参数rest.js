/* 
箭头函数
*/
let sum = (...reset)=>reset.reduce((a,b)=>a+b);
console.log(sum(1,2,3,4));

//函数的剩余参数
//剩余参数只可以写形参列表的最后面
function f(arr, ...rest) {
  arr.push(...rest);
}

let arr = [1];
f(arr, 1, 2, 3, 4);
console.log(arr);
