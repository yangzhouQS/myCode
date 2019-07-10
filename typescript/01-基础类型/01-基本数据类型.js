"use strict";
//1.布尔值类型
let isFalse = false;
let isTrue = true;
console.log(isFalse, isTrue);
//2.数值类型
let decLiteral = 42;
let hexLiteral = 0xf00d;
let binaryLiteral = 0b1010;
let octalLiteral = 0o744;
console.log(decLiteral, hexLiteral, binaryLiteral, octalLiteral);
console.log(decLiteral.toString(2)); //101010
console.log(decLiteral.toString(8)); //52
console.log(decLiteral.toString(16)); //2a
//3.字符串
let s = "xianjs";
let s2 = `s = ${s}`;
console.log(s, s2); //xianjs s = xianjs
//4.数组,数组只可以保存一种数据类型
// let arr: number[] = [1, 2, 3, 'a']
let arr = [1, 2, 3, 123];
// console.log(arr);//[ 1, 2, 3, 123 ]
//5.元祖
//元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
let t1 = ['xxx', 122];
t1[2] = 456;
console.log(t1, t1[2]);
//6.枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 2] = "Red";
    Color2[Color2["Green"] = 3] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
// console.log(Color[0]);
//7.任意值
let n = '1';
n = 123;
n = false;
let list = [1, 2, 3, 4, 5, false];
console.log(list);
//8.空值
//通常会见到其返回值类型是void：
function say() {
    console.log('say');
}
//void类型的变量没有意义
let n1 = undefined;
let n2 = undefined;
// let null_n3:undefined=null;
//9.never
/*
never类型表示的是那些永不存在的值的类型。 例如，never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是never类型，当它们被永不为真的类型保护所约束时。

never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使any也不可以赋值给never。
*/
function error(message) {
    // 返回never的函数必须存在无法达到的终点
    throw new Error(message);
}
//推断类型为never
function fail() {
    return error("世界不存在啦...");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
// 10.联合类型
let a;
//a的值可以为字符串类型或者数字的类型
a = '123';
a = 465;
// a = false;//报错的
/**
 * 参数为字符串或者数字
 * @param s 返回值为字符串或者数组的长度
 */
function getLen(s) {
    return s.length;
}
console.log('len = ', getLen('xianjs'));
console.log('len = ', getLen([1, 2, 3]));
