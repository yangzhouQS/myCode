let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
//1 - 并集
console.log(new Set([...a, ...b]));
//Set { 1, 2, 3, 4 }
//2 - 交集
console.log(new Set([...a].filter(x => b.has(x))));
//Set { 2, 3 }
//3 - 差集
console.log(new Set([...a].filter(x => !b.has(x))));
//Set { 1 }
