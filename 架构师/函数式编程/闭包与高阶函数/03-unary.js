let arr = ['1', '2', '3', '4'];
//原因是map接受3个参数
console.log(arr.map(parseInt));
//[ 1, NaN, NaN, NaN ]
/*
* unary函数的任务是:接受一个给定多参数的函数,转换为只接受一个参数的函数
* */
const unary = (fn) => {
  return fn.length === 1 ? fn : (arg) => fn(arg);
  // console.log(fn);
};
// arr.map(unary(parseInt))
console.log(map.length);

//可以实现将parseInt传入map
console.log(arr.map(unary(parseInt)));