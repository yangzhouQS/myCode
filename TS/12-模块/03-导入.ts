/*import {demo} from "./02-导出"

//实现接口
class Person implements demo {
  age: number;
  name: string;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

let p: Person = new Person('lisi', 26);
console.log(p);
*/
// @ts-ignore
import {Person} from "./02-导出";

class Stu extends Person {
  name: string;
  age: number;
  gender: string;

  constructor(name, age, gender) {
    super(name, age);
    this.gender = gender;
  }
}

let stu: Stu = new Stu('大牛', 26, '男');
stu.info();