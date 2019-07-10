let map = new Map();
map.set('foo', 'foo').set('bar', 'bar').set('name', 'lisi').set('age', 26);
console.log(map.size);//4
//1 - keys()
for (const item of map.keys()) {
  console.log(item);
}
/* foo bar name age */
//2 - values()
for (const item of map.values()) {
  console.log(item);
}
// foo bar lisi 26
//3 - entries()
for (const item of map.entries()) {
  // console.log(item);//[ 'foo', 'foo' ]
  console.log(item[0], item[1]);
}
/*
foo foo
bar bar
name lisi
age 26
*/
for (let [key, value] of map.entries()) {
  console.log([key, value]);
}
/*
[ 'foo', 'foo' ]
[ 'bar', 'bar' ]
[ 'name', 'lisi' ]
[ 'age', 26 ]
*/
// 等同于使用map.entries()
for (let [key, value] of map) {
  console.log(key, value);
}