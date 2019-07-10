let map = new Map();
map.set('foo', true).set('bar', false);
//1 - map长度大小
console.log(map.size);//2

//2 - set设置map的键
map.set('name', 'Lisi').set('age', 26);
console.log(map.size);//4

//3 - get(key)获取键对应的值
console.log(map.get('name'));
console.log(map.get('user'));//获取不存的的 键返回的是undefined

//4 - has()判断给定的键是否在map中
console.log(map.has('name'));//true
console.log(map.has('user'));//false

//5 - delete()删除
console.log(map.size);//4
let result = map.delete('foo');
console.log(result);//true,删除成功返回的是true
console.log(map.size);//3
//删除不存的键,返回false
let r = map.delete('user');//删除失败
console.log(r);//false

//6 - 清空mapclear(),无返回值
map.clear();
console.log(map.size);//0