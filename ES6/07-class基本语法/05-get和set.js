class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {//拦截获取name属性的值
    return 'name属性';
  }

  set name(value) {//set设置name属性的值
    this._name = value
  }

  get age() {
    return this._age
  }

  set age(value) {
    this._age = value
  }
}

let p = new Person('Lisi', 368);
console.log(p.name);//类的内部设置的get name方法会拦截获取name属性时的返回值

