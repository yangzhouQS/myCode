//1 - 创建Map
let m = new Map(
  [
    ['a', 'a'],
    ['b', 'b']
  ]
);
console.log(m);
//2 - map的属性
console.log(m.size);//2
//3 - Map的方法
//3.1 set方法:set方法设置键名key对应的键值为value，然后返回整个 Map 结构。

let map = new Map().set('name', '李四');
map.set('name', 'tom');
//添加相同键时后面的会覆盖前面的键
console.log(map);//Map { 'name' => 'tom' }

//3.2 get(key):get方法读取key对应的键值，如果找不到key，返回undefined。
console.log(map.get('name'));
console.log(map.get('age'));//undefined

//3.3 has(key)
// has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。
console.log(map.has('name'));//true
console.log(map.has('age'));//false


//3.4delete(key)
// delete方法删除某个键，返回true。如果删除失败，返回false。
map.set('age', 26);
console.log(map.delete('age'));//true
console.log(map.has('age'));//false

//3.5clear()
// clear方法清除所有成员，没有返回值。
map.clear();
console.log(map.size);//0

map.set('name', 'tom').set('age', 26).set('gender', '男');

//4 - 遍历方法
// Map 结构原生提供三个遍历器生成函数和一个遍历方法。
/*
keys()：返回键名的遍历器。
values()：返回键值的遍历器。
entries()：返回所有成员的遍历器。
forEach()：遍历 Map 的所有成员。
*/

//4.1 keys():获取map的所有键值
console.log(map.keys());
//MapIterator { 'name', 'age', 'gender' }

//4.2 values()获取map键值所有的值
console.log(map.values());//MapIterator { 'tom', 26, '男' }

//4.3 entries
console.log(map.entries());
//MapIterator { [ 'name', 'tom' ], [ 'age', 26 ], [ 'gender', '男' ] }

//4.4 forEach遍历
map.forEach((k, v) => {
  console.log(k, v);
});
/*
tom name
26 'age'
男 gender
* */
//遍历key值
for (const item of map.keys()) {
  console.log(item);
}
//遍历value值
for (const item of map.values()) {
  console.log(item);
}

//key和value一起遍历

for (const [k, v] of map.entries()) {
  console.log(k, v);
}
/*
name tom
age 26
gender 男
* */