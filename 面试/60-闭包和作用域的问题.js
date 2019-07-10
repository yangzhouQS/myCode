var a = 9;

function fn() {
  a = 0;
  return function (b) {
    return b + a++;
  };
}

var f = fn();
console.log(f(5));//5 //不销毁的变量a
console.log(fn()(5));//5
console.log(f(5));//6//不销毁的变量a
console.log(a);//2
