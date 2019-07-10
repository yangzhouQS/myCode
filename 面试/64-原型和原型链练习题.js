function Fn() {
  this.x = 100;
  this.y = 200;
  this.getX = function () {
    console.log(this.x);
  };
}

Fn.prototype.getX = function () {
  console.log(this.x);
};
Fn.prototype.getY = function () {
  console.log(this.y);
};
var f1 = new Fn;
var f2 = new Fn;

// console.log(f1.getX === f2.getX);//false
// console.log(f1.getY === f2.getY);//true
//只有原型链上的方法才会共享内存,实例的方法是不会相等的


// console.log(f1.__proto__.getY === Fn.prototype.getY);//true
// console.log(f1.__proto__.getX === Fn.prototype.getX);//true
//原型上的方法是一样的

console.log(f1.constructor);//[Function: Fn]
console.log(Fn.prototype.__proto__.constructor);//Obj [Function: Object]
f1.getX();//实例上的方法
f1.__proto__.getX();//原型链上的方法 没有的
f2.getY();//原型上的方法
Fn.prototype.getY();// 构造函数原型上的方法

