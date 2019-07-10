//1 - 数组解构
let arr = ['xaijs', 26];
// let username = arr[0];
// let age = arr[1];
// @ts-ignore
let [username, age]: (string | number)[] = arr;
let [, age2] = arr;
console.log(username, age, age2);//xaijs 26

// 2 - 对象的解构
// @ts-ignore
let {names, ages, default: d} = {names: "xianjs", ages: 55, default: "xxx"};
console.log(names, ages, d);//xianjs 55 xxx


//3 - 设置默认值
let newVar = [
  {name: "xianjs"},
  {age3: 9, address: [1, 2, 3]}
];
let [, {address: [, a1]}, hobby = "游泳"] = newVar;
console.log(a1);//2
