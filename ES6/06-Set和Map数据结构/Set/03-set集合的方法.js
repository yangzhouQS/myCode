let s = new Set();
//1 - 添加元素的方法:add()
s.add(1).add(2).add(3).add(2);
console.log(s.size);//3//2添加了2次
//2 - 删除指定的值:delete()
s.delete(1);
console.log(s);//Set { 2, 3 }
//3 - 判断set集合是否包含指定的值:has()
console.log(s.has(4));//false
console.log(s.has(2));//true
//4 - 清空集合:clear()
s.clear();
console.log(s.size);//0


// 将set集合转换为数组
let s2 = new Set([1, 2, 3]);
console.log(s2);//Set { 1, 2, 3 }
console.log(Array.from(s2));//[ 1, 2, 3 ]