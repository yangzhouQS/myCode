/*
下面是一个对比，看看在判断是否包括一个键上面，Object结构和Set结构的写法不同。

// 对象的写法
const properties = {
  'width': 1,
  'height': 1
};

if (properties[someName]) {
  // do something
}

// Set的写法
const properties = new Set();

properties.add('width');
properties.add('height');

if (properties.has(someName)) {
  // do something
}
Array.from方法可以将 Set 结构转为数组。

const items = new Set([1, 2, 3, 4, 5]);
const array = Array.from(items);
这就提供了去除数组重复成员的另一种方法。

function dedupe(array) {
  return Array.from(new Set(array));
}

dedupe([1, 1, 2, 3]) // [1, 2, 3]*/

//对象和Set判断键是否存在
const obj = {
  name : "xx",
  age : 26
};
const s = new Set(["name", "age"]);
if (obj["name"]) {
  //存在的
}
if (s.has("name")) {
  //存在的
}

//Set集合转换为数组
const set = new Set(["a", "b", "a", "d", "c", "bb"]);
const arr = [...set];
console.log(set, arr);//Set { 'a', 'b', 'd', 'c', 'bb' } [ 'a', 'b', 'd', 'c', 'bb' ]
console.log(Array.from(set));//[ 'a', 'b', 'd', 'c', 'bb' ]

