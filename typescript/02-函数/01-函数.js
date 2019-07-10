"use strict";
//函数:函数声明式和函数表达式创建函数
/*
* 函数参数的类型
* 函数返回值的类型
* */
//不指定返回值的类型,可以进行类型的推断
function sum() {
    return 1 + 4;
}
//指定参数的类型和返回值类型
function sum2(a, b) {
    return a + b;
}
//参数后面有?的表示可选参数,也可以设置默认值
//可选参数必须在必选参数的后面
function sum3(a = 100, b) {
    if (b) { //返回值类型必须进行判断
        return a + b;
    }
    else {
        return a - 10;
    }
}
//书写完整的函数类型:函数类型包含两部分：参数类型和返回值类型。
/**
 * 返回值类型为数字类型
 * @param a 参数a为数字
 * @param b 参数b为数字
 */
let myAdd = function (a, b) {
    return a + b;
};
let myAdd2 = (a, b) => {
    return a + b;
};
let myAdd3 = (a, b) => {
    return a + b;
};
//可选参数/默认参数/剩余参数
//剩余参数
function fn(firstName, ...lastName) {
    console.log(firstName, lastName);
}
fn('jack');
fn('jack', 'tom', 'iwen', 'daiwen');
/*//默认值参数,默认值必须在必选值的后面
function fn(a: number, b: number = 1) {
  console.log(a + b);
}

// fn(1);
fn(1, 4);*/
/*
//可选参数
function fn(a: string, b?: string) {
  if (b) {
    console.log(a, b);
  } else {
    console.log(a);
  }
}

fn('a');//b为可选的参数可以不传递
fn('a', 'b')*/
