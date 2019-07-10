/*
* 1.什么是柯里化
*   柯理化是把一个多参数的函数转换为一个嵌套一元函数的过程.
* */
//前面写的求和的add函数
let add = (x, y) => x + y;
//使用柯理化思想编写求和函数
let addCurried = x => y => x + y;
console.log(addCurried(1)(2));
console.log(add(1, 2));
/*
* curry函数自动转换add函数为柯理化函数
*   curry函数实现了将二元函数转化为一元的嵌套函数
* */
let curry = fn => {
  return firstArg => {
    return secondArg => {
      fn(firstArg, secondArg);
    };
  };
};
let autoCurriedAdd = curry(add);
console.log(addCurried(2)(2));
