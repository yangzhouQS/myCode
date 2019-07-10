abstract class Person3 {
  username: string;
  userage: number;


  constructor(username: string, userage: number) {
    this.username = username;
    this.userage = userage;
  }

//抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 抽象方法的语法与接口方法相似。 两者都是定义方法签名但不包含方法体。
  abstract getName(): string;

  //抽象类中包含抽象方法
  abstract say(): string;
}

//抽象类不可以被实例化,必须继承实现

class Stu extends Person3 {
  constructor(username: string, userage: number) {
    super(username, userage);
    this.userage = userage;
  }

  getName(): string {
    return this.username;
  }

  say(): string {
    return "say";
  }
}


let stu2: Stu = new Stu('李四', 22);
console.log(stu2.getName());
