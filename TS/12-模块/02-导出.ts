//导出
/*
 导出声明
任何声明（比如变量，函数，类，类型别名或接口）都能够通过添加export关键字来导出。
* */
export interface demo {
  name: string;
  age: number;
}

//接口的实现,并且重新导出
export class Person implements demo {
  age: number;
  name: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  };

  info() {
    console.log(this.name, this.age);
  }
}

