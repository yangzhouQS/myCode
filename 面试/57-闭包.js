var a = 4;

function b(x, y, a) {
  // console.log(arguments);
  //[Arguments] { '0': 1, '1': 2, '2': 3 }
  console.log(a);//3
  arguments[2] = 10;
  console.log(a);//10
}

a = b(1, 2, 3);//函数的返回值覆盖变量值
//函数没有明确的返回值,默认的返回值为undefined
console.log(a);//undefined