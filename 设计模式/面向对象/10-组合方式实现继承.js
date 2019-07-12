/**
 * @description组合方式实现继承
 * 优点：继承了上述两种方式的优点，摒弃了缺点，复用了方法，子类又有各自的属性。
 * 缺点：因为父类构造函数被执行了两次，子类的原型对象(Sub.prototype)中也有一份父类的实例属性，而且这些属性会被子类实例(sub1,sub2)的属性覆盖掉，也存在内存浪费。
 * @param name
 * @constructor
 */
function User(name) {
  this.name = name;
  this.data = [1, 2, 3];
  this.getData = function () {
    return this.data;
  };
}

User.prototype.getName = function () {
  return this.name;
};

function A(name, age) {
  User.call(this);
  this.age = age;
}

A.prototype = new User();
A.prototype.getAge = function () {
  return this.age;
};
let a = new A('xxx', 26);
console.log(a.getAge(), a.getName());
