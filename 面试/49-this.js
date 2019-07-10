/*
本文主要解释在JS里面this关键字的指向问题(在浏览器环境下)。

首先，必须搞清楚在JS里面，函数的几种调用方式:
    普通函数调用
    作为方法来调用
    作为构造函数来调用
    使用apply/call方法来调用
    Function.prototype.bind方法
    es6箭头函数
但是不管函数是按哪种方法来调用的，请记住一点：谁调用这个函数或方法,this关键字就指向谁。
接下来就分情况来讨论下这些不同的情况： 
*/
//1.this是window ==>浏览器环境
// console.log(this == window);
//2.作为对象的方法进行调研
let obj = {
  name: '李四',
  getName: function () {
    console.log(this);
  }
};
obj.getName();//this执行的是当前obj对象
let getName = obj.getName;//拿到getName的引用
getName();//全局对象