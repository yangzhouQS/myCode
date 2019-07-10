/*
* 1-size属性返回 Map 结构的成员总数。
* 2-Map.prototype.set(key, value)
* 3-Map.prototype.get(key)=>get方法读取key对应的键值，如果找不到key，返回undefined。
* 4-Map.prototype.has(key)=>has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中。
* 5-Map.prototype.delete(key)=>delete方法删除某个键，返回true。如果删除失败，返回false。
* 6-Map.prototype.clear()=>clear方法清除所有成员，没有返回值。
* */
const m = new Map();
let arr = [1, 2, 3];
m.set(arr, 456);
m.set(true, true);
console.log(m.size);//2
console.log(m.get(true));//true
console.log(m.has(arr));
console.log(m.clear());//清空map
console.log(m.size);//0
