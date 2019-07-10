function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length); //优化T的类型为数组
  return arg;
}

console.log(loggingIdentity(['xians', '45']));

//泛型变量
function hello<T>(arg: T): T {
  return arg;
}

//调用函数的时候指定泛型的类型
console.log(hello<string>('xainjs'));
console.log(hello<number>(12));

//类型推断
console.log(hello(false));