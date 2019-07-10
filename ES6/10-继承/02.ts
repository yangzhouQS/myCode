class Person {
  name: string;
  age: number;
  sex: string;

  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }

  info() {
    console.log(this.name, this.age, this.sex);
  }
}

class Student extends Person {
  score: number;

  constructor(name, age, sex, score) {
    super(name, age, sex);
    this.score = score;
  }

  info() {
    super.info();
    console.log(this.score);
  }
}

//实例化student
let stu: Student = new Student("李四", 26, '男', 99);
stu.info();


