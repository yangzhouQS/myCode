var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
// @ts-ignore
let { a, b } = o;
console.log(a, b); //foo 12
({ a, b } = { a: "baz", b: 101 });
console.log(a, b); //baz 101
// 注意，我们需要用括号将它括起来，因为Javascript通常会将以 { 起始的语句解析为一个块。
// 你可以在对象里使用...语法创建剩余变量：
// @ts-ignore
let { a } = o, passthrough = __rest(o, ["a"]);
let total = passthrough.b + passthrough.c.length;
console.log(a, b);
// @ts-ignore
function f({ a, b }) {
    console.log(a, b);
}
