//有默认参数的函数
// @ts-ignore
function add(a: number, b: number, c: number = 0) {
    return a + b + c;
}

console.log(add(1, 2));
console.log(add(1, 2, 3));
