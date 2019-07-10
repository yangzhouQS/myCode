let str = "http://www.xianjs.net";
console.log(str.includes("xian"));
console.log(str.startsWith('http'));
console.log(str.endsWith('net'));
let a = 30;
//a转换为字符串,长度不够2是使用0补齐
console.log(a.toString().padStart(2, 0));
