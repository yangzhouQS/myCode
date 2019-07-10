//1 - 函数的默认值
function f1(x, y) {
  y = y || 0;
  return x + y;
}

//ES6的默认值参数
function f2(x, y = 0) {
  console.log(x, y);
}

f2(1, undefined);//1 0
f2(1, null);//1 null
f2(1, '');//1 ''

function f3(obj = {x: 1, y: 2}) {
  console.log(obj);
}

f3();
f3({x: 100, y: 998});