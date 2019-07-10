"use strict";
//函数声明式创建泛型
function add(arg) {
    return arg;
}
//函数表达式使用泛型
let add2 = function add2(arg) {
    return arg;
};
//箭头函数使用泛型
let add3 = (arg) => arg;
console.log(add3(123));
