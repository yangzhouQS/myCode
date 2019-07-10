const ws = new WeakSet();
// ws.add(1);//TypeError: Invalid value used in weak set
// ws.add(Symbol());//TypeError: Invalid value used in weak set;
ws.add([1, 2]);
console.log(ws);
