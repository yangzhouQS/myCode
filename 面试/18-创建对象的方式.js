//1.对象的字面变量创建
let obj1 = {};
//2.Object的构造函数创建对象
let obj2 = new Object();
obj2.gender = '男';
//获取对象的属性值
console.log(obj2.gender);
console.log(obj2['gender']);

//3.纯构造函数创建对象
function Person(name, age) {
  this.name = name;
  this.age = age;
}

//4.动态原型创建对象
//动态原型就是在构造函数中进行属性的判断
function Person2(name, work) {
  this.name = name;
  if (work) {
    Person2.prototype.working = function () {
      console.log('我的工作是 : ', work);
    };
  }
}

let p = new Person2('李四', '兰香挖掘机');
// p.working();

//5.空构造函数和原型对象
function Person3() {
}

Person3.prototype.name = '李四';
Person3.prototype.getName = function () {
  console.log(this.name);
};
let p2 = new Person3();
// p2.getName();

//6.混合构造函数和原型创建对象
function Person4(name, age) {
  this.name = name;
  this.age = age;
}

Person4.prototype.setAge = function (age) {
  if (age > 0 && age < 100) {
    this.age = age;
  } else {
    console.log('你设置的age年龄不是合法的');
  }
};
Person4.prototype.getName = function () {
  console.log(this.name);
};
var p4 = new Person4('李四', 22);
// p4.getName();
// p4.setAge(150);//年龄的设置不是合法的,不会进行设置的
//7.寄生模式创建对象
function A(name, age) {
  this.name = name;
  this.age = age;
}

A.prototype.say = function () {
  console.log('A..say');
};

function B(name, age) {
  var obj = {};
  A.call(obj, name, age);
  return obj;
}

B.prototype = new A();
let b = new B('李四', 44);
// console.log(b.name);
console.log(b.constructor);//b的构造函数为Object
//[Function: Object]

//8.Object.create()创建对象

var o1 = { name : 'xxx' };
var o2 = Object.create(o1);

function extend(obj) {
  var result = {};
  for (var prop in obj) {
    return [prop] = obj[prop];
  }
  result.constructor = obj.constructor;
  return result;
}

let o3 = extend(o1);
console.log(o3);

