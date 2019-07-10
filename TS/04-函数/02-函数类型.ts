//函数类型

function add(a: number, b: number): number {
    return a + b;
}

// @ts-ignore
let add2 = function (x: number, y: number): number {
    return x + y;
};

//书写完整函数类型
/**
 * 指定函数的额返回值类型
 */
let add3: (a: number, b: number) => number;
add3 = function (a: number, b: number): number {
    return a + b;
};
//写在一行
let add4: (a: number, b: number) => number = function (a: number, b: number): number {
    return a + b;
};
console.log(add4(4, 5));