function fn() {
  var a = 1;
  return function (n) {
    console.log(++a + n);
  };
}

var f = fn();//fn执行形成的这个私有的作用域不会立即的销毁
f(1);//外部全局的a不会立即销毁
f(1);
f(1);
fn()(1);//函数调用结束立即销毁
fn()(1);

