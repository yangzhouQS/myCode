import {Email} from "./02-email";

class Person {
  public name: string;
  public surname: string;
  public emaile: Email;

  constructor(name: string, surname: string, emaile: Email) {
    this.name = name;
    this.surname = surname;
    this.emaile = emaile;
  }

  info() {
    console.log(this.name, this.surname, this.emaile);
  }
}

// noinspection UnterminatedStatementJS
class Teacher extends Person {
  public subjects: string[];

  constructor(name: string, surname: string, emaile: Email, subjects: string[]) {
    super(name, surname, emaile);
    this.subjects = subjects;
  }

  /**
   * 重写父类的info()方法
   */
  info() {
    super.info();
    console.log(this.subjects);
  }

  tech() {
    console.log("teach");
  }
}

let teacher = new Teacher("丽丽", "李老师", new Email("www@qq.com"), ['数学', '英语', '化学']);
teacher.tech();
teacher.info();