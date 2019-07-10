//es6的模板字符串替换字符串的拼接麻烦
// @ts-ignore
let user = "xainjs";
// @ts-ignore
let age = 9;
let str = `name = ${user}, age = ${age}`;
console.log(`${str}`);//name = xainjs, age = 9

let data = ['xianjs', '产品', '研发', '关于'];
let ulInner = '';
for (let k of data) {
  ulInner += `<li>${k}</li>`;
}
console.log(`<ul>${ulInner}</ul>`);
//<ul><li>xianjs</li><li>产品</li><li>研发</li><li>关于</li></ul>

str = "http://www.xianjs.met";
// @ts-ignore
console.log(str.includes("xian"));

