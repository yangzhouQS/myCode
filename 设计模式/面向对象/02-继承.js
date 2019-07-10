/*
继承,子类继承父类
封装,数据的权限和保密
多态,同一借口不同实现
*/
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(this.name, '在吃饭');
  }

  getName() {
    console.log('my name is:', this.name);
  }
}

class Student extends People {
  /**
   * 学生类继承自People
   * @param name 姓名
   * @param age 年龄
   * @param number 学号
   */
  constructor(name, age, number) {
    super(name, age);
    this.number = number;
  }

  study() {
    console.log(`${this.name} study`);
  }
}

let zs = new Student('张三', 26, '高一2班');
let wang = new Student('王五', 22, '小学');

//继承自父类的方法
zs.eat();
zs.getName();

//子类定义的方法
zs.study();