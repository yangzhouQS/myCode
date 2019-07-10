const ws = new WeakSet();
ws.add([1, 2]);
ws.add([1, 2]);
let obj = {};
let foo = {};
ws.add(obj);
ws.add(foo);
console.log(ws.has(obj));//true
console.log(ws.has(foo));//判断指定对象是否在WeakSet中
ws.delete(foo);//移除指定的对象
console.log(ws.has(foo));//false

console.log(ws.has([1, 2]));//false
