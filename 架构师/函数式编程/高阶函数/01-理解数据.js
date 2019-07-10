/*
* 1.理解数据
*   1.1 js数据类型
*     string/number/boolean/undefined/null/Symbol/对象(复杂数据类型)
*   1.2 存储函数
*     函数赋值给变量
*   1.3 函数可以当做变量传递
*   1.4 函数可以当做返回值
* 2.抽象和高阶函数
*   2.1 抽象:抽象让我们专注于预定的目标,无需关心底层的系统概念
*   2.2 通过高阶函数实现抽象
*     实现forEach
*     实现forEachObject
* */
//1.2存储函数 ==>函数赋值给变量
let fn = () => {
  console.log("Hello Word");
};
fn();
//1.3 函数作为参数进行传递
let fn2 = (fn) => {
  typeof fn === 'function' ? fn() : null;
};
fn2(fn);
//1.4 函数作为返回值
let fn3 = (x) => () => x * 2;
console.log(fn3(2)());

//forEach的实现

let arr = [1, 2, 3, 4];
/**
 * forEach函数将传进来的数组进行遍历,遍历出来的每个元素作为参数传递给回调函数
 * @param arr 处理的数组
 * @param fn 处理数组每一个元素的回调函数
 */
let forEach = (arr, fn) => {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
};
forEach(arr, (x) => {
  console.log(x);
});

//forEachObject的实现
/**
 * forEachObject实现对对象的遍历,第一个参数为需要遍历的对象,第二个参数为回调处理函数
 * 将对象的属性(key)和值(value)作为回调函数的参数传递
 * @param obj
 * @param fn
 */
let forEachObject = (obj, fn) => {
  for (const objKey in obj) {
    fn(objKey, obj[objKey]);
  }
};
let obj = {"name": "李四", "age": 26, "gender": "男"};
forEachObject(obj, (key, value) => {
  console.log(key, "=>", value);
});

//unless 断言的实现
/**
 * unless:只有当flag为false的时候才会实现
 * @param flag
 * @param fn
 */
let unless = (flag, fn) => {
  if (!flag) {
    fn();
  }
};
forEach(arr, (number) => {
  unless(number % 2, () => {
    console.log(number, ' 是偶数');
  });
});


//timers函数:执行制定次数的函数调用
let timers = (timer, fn) => {
  for (let i = 0; i < timer; i++) {
    fn(i);
  }
};
console.log('-------');
timers(10, (n) => {
  unless(n % 2, () => {
    console.log(`${n} 是偶数`);
  });
});
