class Octopus {
  // 你可以使用readonly关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。
  readonly name: string;
  readonly numberOfLegs: number = 8;

  constructor(theName: string) {
    this.name = theName;
  }
}

let o: Octopus = new Octopus('xianjs');
console.log(o.name);
// o.name='xxx';//只读属性禁止修改的