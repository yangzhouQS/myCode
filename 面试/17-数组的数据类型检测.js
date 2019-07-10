let arr = [1, 2, 3, 3];
console.log(typeof arr);
console.log(Array.isArray(arr));//es5检测的方法
console.log(toString.call(arr));
//不常用的
console.log(arr instanceof Array);
console.log(arr.constructor);//[Function: Array]

