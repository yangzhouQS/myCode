let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
// @ts-ignore
let {a, b} = o;
console.log(a, b);//foo 12


({a, b} = {a: "baz", b: 101});
console.log(a, b);//baz 101
// 注意，我们需要用括号将它括起来，因为Javascript通常会将以 { 起始的语句解析为一个块。

// 你可以在对象里使用...语法创建剩余变量：

// @ts-ignore
let {a, ...passthrough} = o;
let total = passthrough.b + passthrough.c.length;
console.log(a, b);


type C = { a: string, b?: number }

// @ts-ignore
function f({a, b}: C): void {
    console.log(a, b);
}
