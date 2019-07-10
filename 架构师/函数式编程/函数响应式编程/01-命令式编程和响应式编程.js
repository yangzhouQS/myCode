// 命令式编程的例⼦，我们要实现这个功能，将每个数组中每个元素的数值乘以2。
function double(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i] * 2);
  }
  return res;
}

//为数组的每个元素加一
function addOne(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i] + 1);
  }
  return res;
}

let arr = [1, 2, 3];
console.log(double(arr));
console.log(addOne(arr));
/*
* 上面的代码重复使用map函数实现系统的功能
* */
/*
*
* 这就是声明式编程，因为在double函数中，代码实际上是这样的种解读：把每个数组映射（map）为每个数组，每个对应的元素都乘以2。
* */
let double2 = arr => {
  return arr.max(x => x * 2);
};
let addOne2 = arr => {
  return arr.max(x => x + 1);
}

/*
* 简写为lambda表达式
* */
let double3 = arr => arr.map(x => x * 2);
let addOne4 = arr => arr.map(x => x + 1);
