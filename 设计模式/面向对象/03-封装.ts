//父类
class People {
  name: string;
  age: number;
  protected weight: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.weight = 120;
  }

  getName() {
    console.log('name = ', this.name);
  }

  getAge() {
    console.log('age = ', this.age);
  }
}
//继承
class Student extends People {
  name: string;
  age: number;
  weight: number;
  number: number;

  constructor(name: string, age: number, number: number) {
    super(name, age);
    this.number = number;
  }

  getWeight() {
    console.log('weight = ', this.weight);
  }
}

// @ts-ignore
let xiaoming: Student = new Student('小明', 26);
xiaoming.getName();
xiaoming.getAge();
xiaoming.getWeight();
