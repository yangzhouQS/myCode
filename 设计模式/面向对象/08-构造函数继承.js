/**
 * 构造函数继承
 * 原理：通过call()函数修改 this 指向，从而实现将父类属性挂载到子类实例中。
 *    1.只调用一次父类的构造函数,避免了在子类原型上创建不必要的，多余的属性 。
 *    2.原型链保持不变。
 * 缺点：只能实现部分继承；如果父类属性都在构造函数中，则能够实现全部继承，如果父类原型对象上还有方法，则子类是继承不到的。
 * @param name
 * @constructor
 */
function User(name) {
  this.name = name;
  this.data = [1, 2, 3];
}

User.prototype.getName = function () {
  return this.name;
};

function A(name, age) {
  User.call(this, name);
  this.age = age;
}

// A.prototype = User.prototype;
// A.prototype.constructor = A;
A.prototype.getAge = function () {
  return this.age;
};
let a = new A('lisi', 16);
console.log(a.getAge());
console.log(a.getName());//无法调用,在a的原型上找不到此方法
console.log(A.constructor);
