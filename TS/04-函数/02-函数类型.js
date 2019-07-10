//函数类型
function add(a, b) {
    return a + b;
}
// @ts-ignore
var add2 = function (x, y) {
    return x + y;
};
//书写完整函数类型
/**
 * 指定函数的额返回值类型
 */
var add3;
add3 = function (a, b) {
    return a + b;
};
//写在一行
var add4 = function (a, b) {
    return a + b;
};
console.log(add4(4, 5));
//# sourceMappingURL=02-函数类型.js.map