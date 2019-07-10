// @ts-ignore
//1.数值类型,十进制,二进制,八进制,十六进制
var a = 10;
console.log(a);
var decimalNumber = 42; //十进制
var hexNumber = 0x2A; //二进制
var binaryNumber = 42; //八进制
var octalNumber = 42; //16进制
console.log(decimalNumber); //42
console.log(hexNumber); //42
console.log(binaryNumber); //42
console.log(octalNumber); //42
//2.布尔值
// @ts-ignore
var f = false;
// @ts-ignore
var t = true;
// @ts-ignore
var tu = new Boolean(false);
//3.字符串
/*
* 字符串是使用 '  或者 " 包裹起来的字符
* 可以使用模板字符串(ES6新增的)
* */
var username = "李四";
var userage = 26;
console.log(username, userage);
console.log("username " + username + " , age = " + userage);
//4.数组
/*
* 第一种，可以在元素类型后面接上 []，表示由此类型元素组成的一个数组:
*     let frends: 数组的数据类型[] = []
* 第二种方式是使用数组泛型，Array<元素类型>：
*   数组只可以放一种数据类型
* */
var frends = ['李四', 'tom', 'jack', 'toni'];
var users = ['李四', 'tom', 'jack', 'toni'];
console.log(frends, users);
//5. 元组 Tuple
// 元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。
var xy = ['hello', 10];
console.log(xy);
xy[2] = 'xianjs';
console.log(xy);
