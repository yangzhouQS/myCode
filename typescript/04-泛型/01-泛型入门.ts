function hello<T>(arg: T): T {
  return arg;//可以处理任意的类型
}

console.log(hello('xianjs'));
console.log(hello(123));
console.log(hello(false));