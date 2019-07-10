"use strict";
function loggingIdentity(arg) {
    console.log(arg.length); //优化T的类型为数组
    return arg;
}
console.log(loggingIdentity(['xians', '45']));
//泛型变量
function hello(arg) {
    return arg;
}
//调用函数的时候指定泛型的类型
console.log(hello('xainjs'));
console.log(hello(12));
//类型推断
console.log(hello(false));
