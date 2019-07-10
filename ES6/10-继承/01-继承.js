class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(this.name + "你好呀!");
  }

  info() {
    console.log("name = %s,age = %s", this.name, this.age);
  }
}
//es6通过extends关键字实现继承
class Student extends Person {
  constructor(name, age, sex, id) {
    super(name, age);
    this.sex = sex;
    this.id = id;
  }

  info() {
    super.info();
    console.log(this.sex, this.id);
  }
}

let stu = new Student('lisi', 26, '男', 'A20181025');
stu.info();

