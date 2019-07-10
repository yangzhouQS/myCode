/*
* forEach
* map
* find
* findeIndex
* filter
* some
* every
* reduce
* reduceRight
* */
let arr = [, 1, 5, 3, 2];
//1 - 判断元素是否在数组
console.log(0 in arr);//false
//2 - forEach循环
arr.forEach(x => {
  console.log(x);
});
//3 - filter过滤
arr.filter(x => {
  if (x % 2 == 0) {
    console.log(x);
  }
});

//4 - map映射
arr.map(x => {
  console.log(x * x);
});
//5 - some //找到trur就会返回
arr.some(x => {
  x > 3 ? console.log(x) : null;
});//5
// 6 - every//找到false就会返回
console.log('------');
arr.every(x => {
  x > 2 ? console.log(x) : console.log(false);
});

//7 - 数组求和
console.log('----');
arr = [1, 2, 3, 4];
arr.reduce((prev, next) => {
  console.log(prev + next);
});

//Array.from(); 从一个类似数组或可迭代对象中创建一个新的数组实例
console.log(Array.from('xianjs'));
//[ 'x', 'i', 'a', 'n', 'j', 's' ]

//Array.isArray() 用于确定传递的值是否是一个 Array。
console.log(Array.isArray([]));//true
console.log(Array.isArray({}));//false
console.log([1, 2, 3].concat([2, 3, 4]));
//[ 1, 2, 3, 2, 3, 4 ]

console.log('---------');
arr = ['a', 'b', 'c'];
var iterator1 = arr.entries();
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());