// @ts-ignore
class Person {
  public name: string;
  public age: number;
  public email: string;

  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    // @ts-ignore
    if (Person.regEmail(email)) {
      this.email = email;
    } else {
      console.log(("error Email"));
    }
  }

  static regEmail(email) {
    let re = /\S+@\S+\.\S+/;
    return re.test(email)
  }

  info() {
    console.log(this.name, this.age, this.email);
  }
}

let p = new Person("Tom", 26, "2638@qq.com");
p.info();//Tom 26 2638@qq.com