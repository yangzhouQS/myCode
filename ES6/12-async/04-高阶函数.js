/*
*
* 高阶函数
* 数据类型的判断
* */
function isType(type) {
  return function (param) {
    return Object.prototype.toString.call(param) === `[object ${type}]`;
  }
}

let isString = isType("String");
let isArray = isType("Array");
console.log(isString('ddd'));
console.log(isArray([]));

function eat() {
  console.log("吃饭了");
}

function after(timer, fn) {
  let count = 0;
  //函数调用达到指定的次数就会执行回调函数
  return function () {
    if (++count === timer) {
      fn();
    }
  }
}

let newEat = after(3, eat);
newEat();
newEat();
newEat();
