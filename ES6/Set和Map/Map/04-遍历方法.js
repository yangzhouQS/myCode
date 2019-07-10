const m = new Map([
  ["a", "123"],
  ["b", 456],
  ["c", 789]
]);
// keys():返回键名的遍历器
for (const k of m.keys()) {
  console.log(k);
}
/*
a
b
c*/

//values():返回键值的遍历器。
for (const v of m.values()) {
  console.log(v);
}
/*
123
456
789
*/

//entries():返回所有成员的遍历器
for (let [k, v] of m.entries()) {
  console.log(k, v);
}
//等价于
for (let [k, v] of m) {
  console.log(k, v);
}
/*
a 123
b 456
c 789
* */
m.forEach((value, key) => {
  console.log(key, value);
});
/*
a 123
b 456
c 789
* */


