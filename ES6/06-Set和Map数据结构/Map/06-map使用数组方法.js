//map使用数组的map和filter方法

const map0 = new Map()
  .set(1, 'a')
  .set(2, 'b')
  .set(3, 'c');
let map = new Map().set(1, 'a').set(2, 'b').set(3, 'c');
console.log(new Map([...map].filter(([k, v]) => k < 3)));
// 产生 Map 结构 {1 => 'a', 2 => 'b'}
console.log(new Map([...map].map(([k, v]) => [k * 2, v])));
//Map { 2 => 'a', 4 => 'b', 6 => 'c' }
map.forEach((v, k, map) => console.log(v, k, map));