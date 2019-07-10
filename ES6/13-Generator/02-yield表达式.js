function* foo() {
  yield 3 + 9;
  //yield不会立即执行,只有调用next方法才会执行的
}

// console.log((foo()).next().value)
console.log(foo().next().value);//12

// Generator 函数可以不用yield表达式，这时就变成了一个单纯的暂缓执行函数。

function* f() {
  console.log("不使用yield表达式");
}

let g = f();
setTimeout(function () {
  console.log(g.next());
}, 500);