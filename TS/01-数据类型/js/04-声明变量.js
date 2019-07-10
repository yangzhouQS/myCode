//var 声明变量
var a = "xianjs";
console.log(a);
//在函数的内部声明变量
function f1() {
    var a = 100;
    return a + 0.1;
}
console.log(f1()); //100.1
//作用域规则
function f2(flag) {
    if (flag) {
        var f = 100; //变量的提升
    }
    return f;
}
// @ts-ignore
var f = f2(false);
console.log(f); //undefined
var ff2 = f2(true);
console.log(ff2); //100
for (var i = 0; i < 4; i++) {
    console.log("i1 = ", i);
    for (var i = 0; i < 3; i++) {
        console.log("i2 = ", i);
    }
}
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 100 * i);
}
//输出的全部是10
//解决办法:使用IIFE捕获每次循环的i
for (var i = 0; i < 10; i++) {
    (function (i) {
        setTimeout(function () {
            console.log(i);
        }, 100 * i);
    })(i);
}
