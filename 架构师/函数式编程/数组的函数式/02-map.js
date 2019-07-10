let arr = [1, 2, 3, 4];
let obj = {name: '李四', age: 26, gender: '男'};

/*
* map函数:投影函数
*   map函数返回给定函数处理后的返回值
* */
function map(ary, callback) {
  let res = [];
  for (let i = 0; i < ary.length; i++) {
    const aryElement = ary[i];
    res.push(callback(aryElement, i, ary));
  }
  return res;
}

map(arr, function (x, index, ary) {
  console.log(x * x, index, ary);
});
arr.map(((value, index, array) => {
  console.log(value, index, array);
}))

