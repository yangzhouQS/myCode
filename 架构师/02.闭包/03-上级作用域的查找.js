//当前函数执行，形成一个私有作用域A，A的上级作用域是谁，和他在哪执行的没有关系，和他在哪创建（定义）的有关系，在哪创建的，它的上级作用域就是谁
/*
var a = 10;

function fn() {
  //=>arguments:实参集合
  //=>arguments.callee:函数本身FN
  //=>arguments.callee.caller:当前函数在哪执行的,CALLER就是谁(记录的是它执行的宿主环境),在全局下执行CALLER的结果是NULL
  console.log(arguments.callee);
  console.log(arguments.callee.caller);//[Function]
  console.log(a);//10
}

fn();

function sum() {
  var a = 11;
  fn();
}
sum();
*/


var n = 10;

function fn() {
  var n = 20;

  function f() {
    n++;//闭包的形成
    console.log(n);
  }

  f();//21
  return f;
}

var x = fn(); //延长n的生命周期
x();//22
x();//23
console.log(n);

console.log('-------');
var bb = 1;

function aa(bb) {
  bb = 2;
  console.log(bb);
}

aa(bb);
console.log(bb);


