/**
 * 寄生组合式继承
 *
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
  User.call(this, name);
  this.age = age;
}

A.prototype = Object.create(User.prototype);
A.prototype.constructor = A;
A.prototype.getAge = function () {
  return this.age;
};
let a = new A('西安', 66);
console.log(a.name, a.age, a.data);
console.log(a.getName(), a.getAge(), a.getData());
