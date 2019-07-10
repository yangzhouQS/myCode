let arr = [1, 2, 4];
// const ws = new WeakSet(arr);//TypeError: Invalid value used in weak set
const ws = new WeakSet([arr]);
console.log(ws);
