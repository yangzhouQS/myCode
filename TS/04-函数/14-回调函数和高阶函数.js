//回调函数和高阶函数
var foo = function () {
    console.log("foo");
};
// @ts-ignore
function bar(cb) {
    console.log("bar");
    cb();
}
// @ts-ignore
bar(foo);
//# sourceMappingURL=14-回调函数和高阶函数.js.map