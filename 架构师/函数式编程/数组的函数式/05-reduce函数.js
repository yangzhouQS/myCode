//reduce为聚合函数
let arr = [1, 3, 5, 7];
let reduce = (arr, fn/*, initialValue*/) => {
  let tmp = 0;
  for (const value of arr) {
    tmp = fn(tmp, value);
  }
  return tmp;
};
//求数组的和
console.log(reduce(arr, (prev, next) => {
  return prev + next;
}));
//求数组的阶乘
console.log(reduce(arr, (prev, next) => prev * next));//0
/**
 * 求数组的阶乘和数组的和,需要判断第三个参数,第三个参数为处理的起始位置
 * @param arr
 * @param fn
 * @param initialValue
 * @returns {*[]}
 */
let reduce2 = (arr, fn, initialValue) => {
  let accumlator;//计数器
  initialValue !== undefined ? accumlator = initialValue : accumlator = arr[0];
  if (initialValue === undefined) {
    for (let i = 1, len = arr.length; i < len; i++) {
      accumlator = fn(accumlator, arr[i]);
    }
  } else {
    for (const value of arr) {
      accumlator = fn(accumlator, value);
    }
  }
  return [accumlator];
};
console.log(reduce2(arr, (a, b) => a * b));