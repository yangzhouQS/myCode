//1 - 使用Set的构造函数创建set集合
let set = new Set();

//2 - Set的属性:size/constructor
console.log(set.size);//0
console.log(set.constructor);//[Function: Set]


//3 - set的方法

//3.1  add向set集合添加数据
let s = new Set().add('a').add('b');
console.log(s);//Set { 'a', 'b' }

//3.2 delete:移除Set的中与这个值相等的元素
let f = s.delete('a');
console.log(f, s);//true Set { 'b' }

//3.3 has:表示该值在Set中存在与否
let h = s.has('a');
let f2 = s.has('b');
console.log(s, h, f2);//Set { 'b' } false true

//3.4 clear:移除Set对象内的所有元素
s.clear();
console.log(s);//Set {}

//由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以keys方法和values方法的行为完全一致。

//3.5 Set.prototype.keys()
// 与values()方法相同，返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值。
let a = new Set(['abc', 1, 2, 3]);
console.log(a.keys());//SetIterator { 'abc', 1, 2, 3 }

//3.6 Set.prototype.values()
// 返回一个新的迭代器对象，该对象包含Set对象中的按插入顺序排列的所有元素的值。
console.log(a.values());//SetIterator { 'abc', 1, 2, 3 }

for (const item of a.keys()) {
  console.log(item);
}//abc 1 2 3
for (const item of a.values()) {
  console.log(item);
}//abc 1 2 3

//3.7 entries方法返回的遍历器，同时包括键名和键值，所以每次输出一个数组，它的两个成员完全相等。
for (const item of a.entries()) {
  console.log(item);
}
/*
[ 'abc', 'abc' ]
[ 1, 1 ]
[ 2, 2 ]
[ 3, 3 ]
*/

//3.8 forEach()
// Set 结构的实例与数组一样，也拥有forEach方法，用于对每个成员执行某种操作，没有返回值。
a.forEach(x => {
  console.log(x);
});

//3.9 set的扩展运算符
let arr = [...a];
console.log(arr);//[ 'abc', 1, 2, 3 ]

//3.10 set使用高阶函数
let ss = new Set([1, 2, 3, 4, 5, 6]);
console.log([...ss].map(x => x * 2));//[ 2, 4, 6, 8, 10, 12 ]
console.log(new Set([...ss].filter(x => x % 2 === 0)));//Set { 2, 4, 6 }
//思路:先将set转换为数组,利用数组的方法,再讲数组转换为集合

// 3.12  set的交集差集并集
{
  let a = new Set([1, 2, 3]);
  let b = new Set([4, 3, 2]);

// 并集
  let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
  let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// 差集
  let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}
}