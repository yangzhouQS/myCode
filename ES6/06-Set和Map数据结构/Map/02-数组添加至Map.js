let arr = [['name', '李四'], ['age', 26]];
let map = new Map();
arr.forEach(([k, v]) => map.set(k, v));
console.log(map);
//Map { 'name' => '李四', 'age' => 26 }
/*
* 事实上，不仅仅是数组，任何具有 Iterator 接口、
* 且每个成员都是一个双元素的数组的数据结构（详见《Iterator》一章）都可以当作Map构造函数的参数。
* 这就是说，Set和Map都可以用来生成新的 Map。
* */
const set = new Set([
  ['foo', 1],
  ['bar', 2]
]);
console.log(set);//Set { [ 'foo', 1 ], [ 'bar', 2 ] }
const m1 = new Map(set);//Map { 'foo' => 1, 'bar' => 2 }
m1.get('foo') // 1
const m2 = new Map([['baz', 3]]);//Map { 'baz' => 3 }
const m3 = new Map(m2);
m3.get('baz') // 3

console.log(new Map(new Set([[1, 2]])));