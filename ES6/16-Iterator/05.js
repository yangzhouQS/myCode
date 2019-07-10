//1 - 数组的遍历接口
let arr = [1, 2, 7, 4];
console.log(arr[Symbol.iterator]);
let iteratorArr = arr[Symbol.iterator]();
console.log(iteratorArr.next());
console.log(iteratorArr.next());
console.log(iteratorArr.next());
console.log(iteratorArr.next());
console.log(iteratorArr.next());