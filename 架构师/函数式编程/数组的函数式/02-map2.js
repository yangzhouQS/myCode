/**
 * map():映射函数,接受等待处理的数组,回调函数,上下文环境
 * @param arr 等待处理的数组
 * @param fn 回调函数
 * @param context 上下文环境
 * @returns {Array} 返回处理后的数组
 */
let map = (arr, fn, context) => {
  let res = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    res.push(fn(arr[i], i, arr, context));
  }
  return res;
};

let arr = [1, 4, 2, 5];
map(arr, (value, index, ary) => {
  console.log(value, index, ary, this);
}, {});





