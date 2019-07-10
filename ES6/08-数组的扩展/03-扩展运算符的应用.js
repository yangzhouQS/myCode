//扩展运算符的应用

/*//1 - 复制数组
let a = [1, 3];
let c = a;//浅复制
//ES5
// let b = a.concat();
let b = [...a];
console.log(b);//[ 1, 3 ]*/

//2 - 合并数组
let a = [1, 2, 4];
let b = [3, 4];
// ES5
// c = a.concat(b, [1, 2, 3, 4]);
let c = [...a, ...b];
console.log(c);

