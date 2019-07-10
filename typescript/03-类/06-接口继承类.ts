// 当接口继承了一个类类型时，它会继承类的成员但不包括其实现。
// 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。
// 接口同样会继承到类的private和protected成员。
// 这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）。
import "./05-类实现接口";

class A {
  private names: string;

  constructor(names: string) {
    this.names = names;
  }

  private getName() {
    console.log(this.names);
  }
}

interface B extends A {
  say(): void;
}

//类实现多接口
// @ts-ignore
class C implements B, Person {
  toString(): string {
    throw new Error("Method not implemented.");
  }

  age: number;
  gender: string;
  name: string;
  private names: string;
  userage: number;
  username: string;

  constructor(age: number, gender: string, name: string, names: string, userage: number, username: string) {
    this.age = age;
    this.gender = gender;
    this.name = name;
    this.names = names;
    this.userage = userage;
    this.username = username;
  }

  private getName(): void {
    console.log(this.name);
  }

  say(): void {
    console.log('say');
  }

}

