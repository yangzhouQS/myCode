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
console.log('------');

function sum() {
  var a = 11;
  fn();
}

sum();

let oDiv = document.createDocumentFragment();
console.log(oDiv);