//箭头函数
class Person {
  public name: string;

  public constructor(props: string) {
    this.name = props;
  }

  greet() {
    console.log(`我的名字是 ${this.name}`);
  }

  greetDelay(timer) {
    setTimeout(function () {
      console.log(`我的名字是 ${this.name}`);//this失效
    }, timer);
  }

  greetDelay2(timer) {
    setTimeout(() => {
      console.log(`我的名字是 ${this.name}`);//使用箭头函数解决this'失效的问题
    }, timer);
  }
}

let p = new Person("李四");
p.greet();
p.greetDelay(2000);
p.greetDelay2(1000);