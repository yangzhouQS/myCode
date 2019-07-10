// 方法一
let set = new Set([1, 2, 3]);
set = new Set([...set].map(val => val * 2));
// set的值是2, 4, 6
console.log(set);//Set { 2, 4, 6 }

// 方法二
let set2 = new Set([1, 2, 3]);
set2 = new Set(Array.from(set, val => val * 2));
console.log(set2);//Set { 4, 8, 12 }
console.log(Array.from(set2));//[ 4, 8, 12 ]