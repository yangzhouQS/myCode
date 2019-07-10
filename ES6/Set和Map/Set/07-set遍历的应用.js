let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
//并集
let res1 = new Set([...a, ...b]);
console.log(res1);//Set { 1, 2, 3, 4 }

//交集
let res2 = new Set([...a].filter(x => b.has(x)));
console.log(res2);//Set { 2, 3 }

//差集
let res3 = new Set([...a].filter(x => !b.has(x)));
console.log(res3);//Set { 1 }
