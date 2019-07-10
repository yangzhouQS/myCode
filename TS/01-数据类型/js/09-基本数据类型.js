// @ts-ignore
//1.数值类型,十进制,二进制,八进制,十六进制
let a = 10;
console.log(a);
let decimalNumber = 42; //十进制
let hexNumber = 0x2A; //二进制
let binaryNumber = 0b101010; //八进制
let octalNumber = 0o52; //16进制
console.log(decimalNumber); //42
console.log(hexNumber); //42
console.log(binaryNumber); //42
console.log(octalNumber); //42
//2.布尔值
// @ts-ignore
let f = false;
// @ts-ignore
let t = true;
// @ts-ignore
let tu = new Boolean(false);
//3.字符串
/*
* 字符串是使用 '  或者 " 包裹起来的字符
* 可以使用模板字符串(ES6新增的)
* */
let username = "李四";
let userage = 26;
console.log(username, userage);
console.log(`username ${username} , age = ${userage}`);
//4.数组
/*
* 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组:
*     let frends: 数组的数据类型[] = []
* 第二种方式是使用数组泛型，Array<元素类型>：
*   数组只可以放一种数据类型
* */
let frends = ['李四', 'tom', 'jack', 'toni'];
let users = ['李四', 'tom', 'jack', 'toni'];
console.log(frends, users);
//5. 元组 Tuple
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
let xy = ['hello', 10];
console.log(xy);
xy[2] = 'xianjs'; //有问题的
console.log(xy);
//6.枚举
// enum类型是对JavaScript标准数据类型的一个补充。
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
