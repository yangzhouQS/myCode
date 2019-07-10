/*
* 一元函数:
*   只接受一个参数的函数时候一元(unary)函数
* 二元函数:
*   接收两个参数的函数时二元函数
* */
//1.一元函数
let identity = x => x;
//2.二元函数
let add = (x, y) => x + y;

/*
* 3.可变函数
*   可变函数是接收可变参数的函数
* */
function varableadc(a) {
  console.log('a = ', a);
  console.log(arguments);
}

//argument捕获了传入的所有参数
varableadc(1, 2, 3, 4);

/*
* 4.ES6的扩展运算符
*   es6的扩展运算符收集到剩余的参数,保存到数组
* */
function fn(a, ...rest) {
  console.log(a);
  console.log(rest);
}

//a = 1
//rest = [2,3,4]
fn(1, 2, 3, 4);
