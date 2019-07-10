let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.find(function (value, index, arr) {
  // console.log(value, index, arr);
  return value > 50;
})); //输出6  注意:在函数中如果找到符合条件的数组元素就return，并停止查找

let arr2 = ["js", "java", "python", "c", "c++"];
// arr2[10] = "PHP";
for (let index of arr2.keys()) {
  // console.log(index, arr2[index]);//0 1 2 3 4
}
for (let [index, val] of arr2.entries()) {
  console.log(index, val);
}
