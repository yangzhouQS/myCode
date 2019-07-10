//zip()函数遍历两个给定的数组
/**
 * 遍历两个数组,先求取数组的最小长度,遍历,使用回调函数处理
 * @param leftArr
 * @param rightArr
 * @param fn
 * @returns {Array}
 */
let zip = (leftArr, rightArr, fn) => {
  let len = Math.min(leftArr.length, rightArr.length);
  let result = [];
  for (let i = 0; i < len; i++) {
    result.push(fn(leftArr[i], rightArr[i]));
  }
  return result;
};

console.log(zip([1, 2, 3], [4, 5, 6, 7], (x, y) => x + y));//[ 5, 7, 9 ]
