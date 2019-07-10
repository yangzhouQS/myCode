/**
 * 判断数组中是否存在指定的元素
 * @param arr
 * @param y
 * @returns {*}
 */
let find = function (arr, y) {
  for (let i = 0, len = arr.length; i < len; i++) {
    if (arr[i] === y) {
      return i;
    }
  }
  return null;
};
const fined2 = (f => f(f)(f =>
  (next => (x, y, i = 0) =>
    (i > x.length) ? null :
      (x[i] == y) ? i :
        next(x, y, i + 1))((...args) =>
    (f(f))(...args))
));

let arr = [1, 2, 3, 4];
