let arr = [1, 2, 3, 2, 3, 4];
//1 - 创建set集合,无序的集合
let s = new Set();
arr.forEach(x => s.add(x));
console.log(s);//Set { 1, 2, 3, 4 }


//2 - Set可以接受数组
let s2 = new Set([1, 2, 3, 3, 2, 1]);
console.log(s2);
//Set { 1, 2, 3 }

//3 - 查看set集合的大小
console.log(s2.size);//3
console.log(s2.length);//undefined

//4 - set集合添加对象
let s3 = new Set()
s3.add({'name': 'tom'});
s3.add({'name': 'tom'});
console.log(s3.size);//2 //两个对象总是不相等的
console.log({'name': 'tom'} === {'name': 'tom'});//false

//5 - NaN
console.log(NaN === NaN);//false
let s4 = new Set();
s4.add(NaN);
s4.add(NaN);
//在set的内部认为NaN是相等的
console.log(s4.size);//1
