//1 - 展开运算符,展开数组
function spread(x, ...args) {
  // sum.apply(null, args);
  sum(...args);//使用es6的展开运算符,代替apply
}

function sum(a, b, c, d) {
  console.log(a, b, c, d);
}

spread('x', 1, 2, 3, 4, 5, 4);

//2 - 合并数组
let a = [1, 2, 3];
let b = [4, 5];
let c = [...a, ...b];
//let d = a.concat(b);
console.log(c);//[ 1, 2, 3, 4, 5 ]


//3 - 对象的合成
let name = {name: "李四"};
let age = {age: 22};
let school = {...name, ...age};//浅拷贝
console.log(school);//{ name: '李四', age: 22 }

