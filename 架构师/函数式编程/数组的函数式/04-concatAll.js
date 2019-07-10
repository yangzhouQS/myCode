//concatAll函数实现将嵌套的数据连接到一个新的数组之中
/**
 * 处理嵌套的数组
 * @param arr
 * @param fn
 * @returns {Array}
 */
let concatAll = (arr, fn) => {
  let results = [];
  for (const value of arr) {
    results.push.apply(results, value);
  }
  return results;
}
