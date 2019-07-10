//1 - 数组的Iterator接口
let arr = [1, 2, 3, 4, 5];
let itar = arr[Symbol.iterator]();
console.log(itar.next());
console.log(itar.next());
console.log(itar.next());
console.log(itar.next());
console.log(itar.next());
console.log(itar.next());
//数组原生提供了Iterator接口可以直接调用for....of循环的
console.log('---------');
for (const itarElement of arr) {
  console.log(itarElement);
}

