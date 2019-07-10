/**
 * 遍历数组,传入的fn需要返回布尔值,使用&&需要所有的数组元素都遵循fn的给定条件
 * @param arr
 * @param fn
 * @returns {boolean}
 */
const every = (arr, fn) => {
  let result = true;
  for (let i = 0, len = arr.length; i < len; i++) {
    // console.log(fn(arr[i]));
    result = result && fn(arr[i]);
  }
  return result;
}
//使用for...of重写every函数
const every2 = (arr, fn) => {
  let result = true;
  for (const v of arr) {
    result = result && fn(v);
  }
  return result;
}
let arr = [1, 2, 3, 4, 5];//false
console.log(every(arr, (x) => x > 2));
console.log(every([NaN, NaN], isNaN));//true
console.log(every([NaN, NaN, 5], isNaN));//false

/**
 * some():函数,只要满足一个条件为true就返回true
 * @param arr
 * @param fn
 * @returns {boolean}
 */
const some = (arr, fn) => {
  let result = true;
  for (const v of arr) {
    result = result || fn(v);
  }
  return result;
}

