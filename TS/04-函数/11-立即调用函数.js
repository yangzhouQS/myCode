var bar = 100; //全局的变量
(function () {
    var foo = 10; //在函数作用域
    bar = 1; //在全局的作用域
    console.log(bar); //1
    console.log(foo); //10
})();
//# sourceMappingURL=11-立即调用函数.js.map