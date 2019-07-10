var o = new Object();

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.getName = function () {
    console.log(this.name);
  };
}

Person.prototype.getAge = function () {
  console.log(this.age);
};
var p = new Person('Tom', 16);
console.log(Person.prototype);
console.log(Array.prototype);
console.log(Object.prototype);
/*
1. 一切对象都最终继承自Object对象，Object对象直接继承自根源对象null
下面两点可以佐证：
1）一切对象的原型链最终都是.... → Object.prototype → null。例如定义一个num变量var num = 1，则num的原型链为x → Number.prototype → Object.prototype → null; 定义一个函数对象fnfunction fn() {}，则fn的原型链为fn → Function.prototype → Object.prototype → null;等等...
2）一切对象都包含有Object的原型方法，Object的原型方法包括了toString、valueOf、hasOwnProperty等等，在js中不管是普通对象，还是函数对象都拥有这些方法，下面列出了几个例子，大家可以自行去举例验证：






*/