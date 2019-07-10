function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHi = function () {
  console.log(this.name + "你好Hi");
};

function Student(name, age, score) {
  //调用基类的构造函数
  Person.call(this, name, age);
  this.score = score;
}

Student.prototype = new Person();
Person.prototype.constructor = Student;//修改构造器
Student.prototype.hello = function () {
  console.log("hello" + this.name, this.score);
};
let stu = new Student("李四", 26, 88);
stu.hello();

stu.sayHi();
