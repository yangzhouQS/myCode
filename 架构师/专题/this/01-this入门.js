class People {
  constructor(name) {
    // 在用new关键字实例化一个对象的时候，相当于在说，
    // “创建一个People类实例（主语），它（this）的name是……”
    // 所以这里的this就是新创建的People类实例
    this.name = name;
  }

  run() {
    console.log(`${this.name} seems happy.`)
  }
}

// new关键字实例化一个类
var xiaoming = new People('xiaoming');
xiaoming.run();