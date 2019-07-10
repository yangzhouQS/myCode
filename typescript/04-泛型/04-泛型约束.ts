//泛型约束

//参数进行数组化,不是很友好的
function fn<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

interface lengthwise {
  length: number;
}

//泛型约束继承接口
function hello<T extends lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

console.log(hello('123'));
// hello(456);// Argument of type '456' is not assignable to parameter of type 'lengthwise'. hello(456);//
//实参是没有length属性的