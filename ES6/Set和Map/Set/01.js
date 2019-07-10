const s = new Set();
let arr = [1, 2, 3, 1, 2, 3];
arr.forEach(x => s.add(x));//循环箱Set集合添加元素
console.log(s);//Set { 1, 2, 3 } , Set集合元素不重复
for (let i of s) {//set的遍历
  console.log(i);
}

//使用set进行数组去重
console.log([...new Set([1, 2, 3, 1, 2, 3])]);

//使用ser数据结构进行字符串的去重
const set = new Set("abcdeabc");
console.log(set);//Set { 'a', 'b', 'c', 'd', 'e' }
console.log([...set].join(""));//abcde //字符串去重
