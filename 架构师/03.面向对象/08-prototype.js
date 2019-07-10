function Fn() {
  this.aa = function () {
    console.log("私有的aa");
  };
  this.bb = function () {
    console.log('私有的bb');
  };
}

Fn.prototype.cc = function () {
  console.log("公共的方法cc");
};
var f1 = Fn;
var f2 = Fn;
/*
* 公共的方法有点:
*     方法公用
*     节省内存空间
* */
console.log(f1.cc === f2.cc);//true
/*
* 类(函数)的prototype属性是一个对象,有一个constructor 指向类本身(属性指向函数本身)
* */
console.log(Fn.prototype.constructor === Fn);

console.log(f1.__proto__);


