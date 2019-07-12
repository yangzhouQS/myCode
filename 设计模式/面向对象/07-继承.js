function CreateUser(name) {
  this.name = name;
}

CreateUser.prototype.getName = function () {
  return this.name;
};
/*
* new()在构造函数的内部都做了什么
* 1.创建一个空的对象
* 2.将空对象的__proto__属性指向构造函数的prototype属性
* 3.将构造函数的this指向该对象
* 4.执行构造函数的代码
* 5.返回该对象
* */
let p1 = new CreateUser('lisi');

//类式继承
function A(name, age) {
  this.age = age;
}

A.prototype = new CreateUser();

A.prototype.getAge = function () {
  return this.age;
};
/*
* 类式继承缺点:
*   构造函数无法传递参数
*   基类的方法和属性都是公共的,其他实例修改后会影响使用
* */

