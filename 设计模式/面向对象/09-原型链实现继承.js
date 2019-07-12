/**
 * 原型链实现继承
 * 原理：将子类的prototype属性赋值为父类实例对象，则子类的_proto_属性继承父类。
 * 优点：父类的方法(getName)得到了复用。
 * 缺点：重写子类的原型 等于 父类的一个实例，（父类的实例属性变成子类的原型属性）如果父类包含引用类型的属性，那么子类所有实例都会共享该属性（包含引用类型的*原型*属性会被实例共享）。
 * 构造函数的初始化属性无法重新使用
 * @param name
 * @constructor
 */
function User(name) {
  this.name = name;
  this.data = [1, 2, 3];
  this.getData = function () {
    return this.getData();
  };
}

User.prototype.getName = function () {
  return this.name;
};

function A(name, age) {
  this.name = name;
  this.age = age;
}

A.prototype.getAge = function () {
  return this.age;
};
A.prototype = new User();
A.prototype.constructor = A;
let a = new A('xxx', 26);
console.log(a.getName(), a.getAge());
