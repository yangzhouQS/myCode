let arr = [1, 2, 3, 4];
let obj = {name: '李四', age: 26, gender: '男'};

function forEach(arg, fn) {
  let index = 0;
  for (const cur of arg) {
    fn(index++, cur, arg);
  }
}

forEach(arr, function (index, cur) {
  console.log(index, cur);
});
/**
 *
 */
arr.forEach(function (value, index, array) {
  console.log(value, index, array, this);
}, {})




