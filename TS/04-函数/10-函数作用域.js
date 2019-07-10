//函数作用域
function f4() {
    if (true) {
        var a = 10;
        var b = 123; //let声明的变量无法再外部使用
    }
    console.log("a = ", a);
    // console.log(b);
}
f4();
//# sourceMappingURL=10-函数作用域.js.map