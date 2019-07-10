/*
* 在javascript中函数的参数可以不对等,实参可以比形参多,实参比形参少时默认为undefined
* 在typescript中形参和实参个数必须一致,但是可以使用可选参数
* 可选参数: c?: number==>可选参数必须位于可选参数的后面
* */
function add(a: number, b: number, c?: number): number {
    let result = a + b;
    if (c !== undefined) {
        result += c;
    }
    return result;
}

console.log(add(1, 2, 3));
console.log(add(1, 2));