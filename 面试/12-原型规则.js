/*
原型的规则:
  1>所以的引用类型(数组/对象/函数),都具有对象特性,即可自由扩展属性(null除外)
  2>所以的引用类型(数组/对象/函数),都有一个__poto__属性,属性值是一个普通的对象[隐式原型]
  3>所有的函数,都有一个prototype属性,属性值也是一个普通的对象
  4>引用数据类型的 __proto__ 属性值指向它构造函数的prototype属性值
  5>当试图得到一个对象的某个属性时,如果这个对象本身没有这个属性,那么会去它的__proto__(即它的构造函数的prototype中去进行寻找的(原型链的查找机制)
*/

var obj = {};
obj.a = 100;
var arr = [];
arr.a = 100;

function f() {
}

f.a = 100;

//3.
console.log(f.prototype);
//f {}


//1.
// console.log(obj);
// console.log(arr);
// console.log(f);

//2.
// console.log('__proto__属性是一个普通对象:');
// console.log(obj.__proto__);
// console.log(arr.__proto__);
// console.log(f.__proto__);
// console.log(f.prototype);//f {}
// console.log(obj.__proto__ === Object.prototype);//true

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getName = function () {
  console.log(this.name);
}
var p = new Person('李四', 26);
p.getName();//去Person的构造函数的prototype原型链上去查找的