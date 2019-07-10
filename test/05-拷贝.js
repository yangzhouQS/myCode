var a = { name : "李四" };
var b = Object.assign({}, a);
console.log(b);
b.name = "大牛";
console.log(a, b);
var c = { ...a };
c.name = "c";
console.log(a, c);