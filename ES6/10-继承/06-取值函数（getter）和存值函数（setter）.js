class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get() {
    console.log('get');
  }

  set() {
    console.log('set');
  }
}

let p = new Person('李白', 26);
console.log(p.name);

