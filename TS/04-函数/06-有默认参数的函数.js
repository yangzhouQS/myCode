//有默认参数的函数
// @ts-ignore
function add(a, b, c) {
    if (c === void 0) { c = 0; }
    return a + b + c;
}
console.log(add(1, 2));
console.log(add(1, 2, 3));
//# sourceMappingURL=06-有默认参数的函数.js.map