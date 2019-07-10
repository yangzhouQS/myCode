let myClass = class Me {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  getClassName() {
    return Me.name;
  }

  say() {
    console.log('say');
  }
}
// 这个类的名字是Me，但是Me只在 Class 的内部可用，指代当前类。
// 在 Class 外部，这个类只能用MyClass引用。
let test = new myClass('xianjs', 26);
test.say();
console.log(test.getClassName());
