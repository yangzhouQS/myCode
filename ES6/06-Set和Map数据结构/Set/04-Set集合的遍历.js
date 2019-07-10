let s = new Set(['red', 'green', 'blue']);
console.log(s);

//1 - 获取set的key
for (let item of s.keys()) {
  console.log(item);
}

//2  -获取set  key对应的值
for (let item of s.values()) {
  console.log(item);
}

//3 - entries() 返回键值对的遍历器
for (let item  of s.entries()) {
  console.log(item);
}
/*
[ 'red', 'red' ]
[ 'green', 'green' ]
[ 'blue', 'blue' ]
*/
// 上面代码中，entries方法返回的遍历器，同时包括键名和键值，所以每次输出一个数组，它的两个成员完全相等。
s.forEach((k, v) => console.log(k, v));
/*
red red
green green
blue blue
*/