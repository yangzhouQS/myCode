//1.字面量的方式创建对象
let p = {
  name: '李四',
  age: 26,
  say: function () {
    console.log(this.age);
  }
};

//2.内置构造函数的方式来创建对象
let p2 = new Object();
p2.name = '学习javascript';
p2.say = function () {
  console.log(this.name);
};

//3.简单工厂函数的方式来创建对象
let creatperson = function (name, age) {
  var o = {};
  o.name = name;
  o.age = age;
  o.say = function () {
    console.log(this.name);
  }
  return o;
}
let p3 = creatperson('李四', 22);

//4.自定义构造函数的方式来创建对象
function Person(name, age) {
  /*
  * 1>创建空对象
  * 2>this指向该空对象
  * 3>通过this绑定数据/行为
  * 4>返回该对象
  * */
  this.name = name;
  this.age = age;
  this.say = function () {
    console.log(this.name, this.age);
  }
}
let p4 = new Person('tom',16);
p4.say();