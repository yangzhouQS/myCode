//类的概念,模板
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`name = ${this.name} eat something`);
  }

  speak() {
    console.log(`my name is ${this.name}`);
  }
}

//创建实例
let p = new People('张三', 26);
p.eat();
p.speak();

let wang = new People('王五', 29);
wang.eat();
wang.speak();