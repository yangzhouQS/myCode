//函数声明
function add1(x, y) {
    return x + y;
}

let z = 100;
// @ts-ignore
//函数表达式创建函数
let add2 = function (x, y) {
    return x + y + z;
};
console.log(add2(1, 2));
console.log(add1(1000, 200));
//在JavaScript里，函数可以使用函数体外部的变量。 当函数这么做时，我们说它‘捕获’了这些变量
/*
* 函数声明:创建的函数可以进行函数的提升和声明
* 函数表达式创建的函数,不存在函数的提升
* */