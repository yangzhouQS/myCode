/*
* 闭包有三个可以访问的变量作用域
*   1>在它自身声明之内声明定义的变量
*   2>在全局定义的变量
*   3>对外部函数变量的访问
* */

//1.对自身定义的变量进行访问
function outer() {
  return function () {
    let a = 100;
    console.log(a);
  };
}

outer()();
//2.对全局变量的访问
let global = 'global';

function outer2() {
  return function () {
    //对全局变量的使用
    console.log(global);
  };
}

outer2()();

//3.对外部函数变量的访问
function outer3() {
  let outer = 'outer';

  function inner() {
    console.log(outer);//对外部函数变量的访问
  };
  inner();
}

outer3();


