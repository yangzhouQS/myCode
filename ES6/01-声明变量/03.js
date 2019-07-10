//1 - 使用let声明的变量,只在变量所在的代码块内有效
{
  let a = 100;
  console.log(a);
}
// console.log(a);//无法输出

//2 - let声明的变量不存在预解析
console.log(b2);//undefined
// console.log(b);
// 引用错误 :ReferenceError: b is not defined
let b = 100;
var b2 = 200;

//3 - 暂存性死区
//只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。
/*
let f = 0;

function f() {
  // f = 8;
  let f = 9;
}

fn();*/

//4 - 不允许重复声明
// let不允许在相同作用域内，重复声明同一个变量。

let q=1;
// let q=100;

//5 - 在for循环的应用