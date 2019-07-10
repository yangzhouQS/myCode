function Fn(name, age) {
  var n = 10;
  this.name = name;
  this.age = age + n;
}

/*
  普通函数执行
    1.形成一个私有的作用域
    2.形参赋值
    3.变量提升
    4.代码执行
    5.栈内存释放问题
*/
Fn();

// 构造函数执行
var f1 = new Fn('xxx', 20);
var f2 = new Fn('aaa', 30);

console.log(f1 === f2);//=>false：两个不同的实例（两个不同的堆内存地址）
console.log(f1.age);//=>30
console.log(f2.name);//=>'aaa'
console.log("name" in f1);//=>true name&age在两个不同的实例都有存储，但是都是每个实例自己私有的属性
console.log(f1.n);//=>undefined 只有this.xxx=xxx的才和实例有关系,n是私有作用域中的一个私有变量而已（this是当前类的实例

