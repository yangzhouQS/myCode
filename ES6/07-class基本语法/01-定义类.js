//定义类:ES5,构造函数
function Point(x, y) {
  this.x = x;
  this.y = y;
  return this;
}

Point.prototype.toString = function () {
  console.log('[' + this.x + ', ' + this.y + ']');
};
new Point(1, 2).toString();

//使用E6书写
class Point2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {//ES6模板字符串
    console.log(`(${this.x}  ${this.y})`);
  }
}

let p = new Point2(3, 6);
/*
* 1>constructor:代表的是类的构造函数,构函数中的this指向的是实例对象
*
* 2>类中定义方法不需要是用function关键字
*
* 3>构造函数的prototype属性依然存在,并且类上定义的所有方法都是在类的原型上的.
*
* 4>定义在类上的方法都是不可以枚举的
*
* 5>new创建对象时,constructor方法默认生成并且调用
*
* 6>class声明的类必须使用new创建对象,不可以直接当做函数调用
*
* */
console.log(Object.keys(Point2.prototype));//[]
console.log(Object.getOwnPropertyNames(Point.prototype));
//[ 'constructor', 'toString' ]