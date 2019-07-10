//函数作用域
function f4(): void {
    if (true) {
        var a: number = 10;
        let b = 123;//let声明的变量无法再外部使用
    }
    console.log("a = ", a);
    // console.log(b);
}
f4();
