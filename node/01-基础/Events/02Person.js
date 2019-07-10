const EventEmiter = require('events');

class Person extends EventEmiter {
  constructor(name) {
    super();//实现父类的构造方法
    this.name = name;
    this.age = 0;
    this.growup();
  }

  growup() {
    setInterval(() => {
      this.age++;
      this.emit('growup');//触发事件
    }, 1000);
  }
}

const p1 = new Person('Tom');
//为p1绑定事假,指定处理函数
/*p1.addEventListener('growup',function () {
});*/
p1.addListener('growup', function () {
  console.log('长大了一岁,现在的年龄', p1.age);
});