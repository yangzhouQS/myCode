//函数声明式创建泛型
function add<T>(arg: T): T {
  return arg;
}

//函数表达式使用泛型
let add2 = function add2<T>(arg: T): T {
  return arg;
};
//箭头函数使用泛型
let add3 = <T>(arg: T): T => arg;
console.log(add3<number>(123));