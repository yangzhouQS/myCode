//1 - 数组解构
var arr = ['xaijs', 26];
// let username = arr[0];
// let age = arr[1];
// @ts-ignore
var username = arr[0], age = arr[1];
var age2 = arr[1];
console.log(username, age, age2); //xaijs 26
// 2 - 对象的解构
// @ts-ignore
var _a = { names: "xianjs", ages: 55, default: "xxx" }, names = _a.names, ages = _a.ages, d = _a.default;
console.log(names, ages, d); //xianjs 55 xxx
//3 - 设置默认值
var newVar = [
    { name: "xianjs" },
    { age3: 9, address: [1, 2, 3] }
];
var _b = newVar[1].address, a1 = _b[1], _c = newVar[2], hobby = _c === void 0 ? "游泳" : _c;
console.log(a1); //2
