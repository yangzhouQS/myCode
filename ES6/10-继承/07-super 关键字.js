class Person {

}

class Stu extends Person {

  constructor() {
    super();
    //不调用super是报错
    //ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
  }
}

let s = new Stu();