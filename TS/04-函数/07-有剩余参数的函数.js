//有剩余参数的函数
//剩余的参数保存为数组列表
function add() {
    var foo = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        foo[_i] = arguments[_i];
    }
    var result = foo.reduce(function (a, b) { return a + b; });
    return result;
}
console.log(add(1, 2, 3, 4, 5, 6)); //21
//# sourceMappingURL=07-有剩余参数的函数.js.map