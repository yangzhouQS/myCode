let arr = [1, 2, 3, 4];
let obj = {name: '李四', age: 26, gender: '男'};
/**
 * 过滤函数
 * @param ary
 * @param callback
 * @param context
 * @returns {Array}
 */
let filter = (ary, callback, context) => {
  let res = [];
  for (let i = 0; i < ary.length; i++) {
    const cur = ary[i];
    let result = callback.call(context, cur, i);
    result ? res.push(result) : null;
  }
  return res;
}

filter(arr, function (x, index) {
  console.log(x, index, this);
}, {});
