/*
* 基础数据类型
* 布尔值:boolean ==>true/false
* 数字:number
* */
let f = false;
let t = true;
console.log(f, t);
let num = 100;
let decLiteral = 6;
let hexLiteral = 0xf00d;
let binaryLiteral = 0b1010;
let octalLiteral = 0o744;
console.log(decLiteral, hexLiteral, binaryLiteral, octalLiteral);
//6 61453 10 484
//字符串:string
let s = "http://www.xianjs.net";
console.log("s = ", s);
//s =  http://www.xianjs.net
// 你还可以使用模版字符串，它可以定义多行文本和内嵌表达式。
// 这种字符串是被反引号包围（`），并且以${ expr }这种形式嵌入表达式
console.log(`我的主页地址${s}`);
// @ts-ignore
let name = "李四";
let age = 25;
let sex = "男";
console.log(`我的名字是${name},年龄${age},性别${sex}`);
//我的名字是李四,年龄25,性别男
//数组
let list = [1, 2, 3, 4];
console.log(list);
// 第二种方式是使用数组泛型，Array<元素类型>：
let list2 = [1, 2, 3];
console.log(list2);
//元组
let x = [123, '456'];
console.log(x); //[ 123, '456' ]
//枚举
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
;
let c = Color.red;
console.log(c); //0
let lastName = Color[2];
console.log(lastName); //blue
//Null 和 Undefined
let u = undefined;
let nu = null;
console.log(u, nu); //undefined null
/*
Never
never类型表示的是那些永不存在的值的类型。 例如，never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是never类型，当它们被永不为真的类型保护所约束时。

never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使any也不可以赋值给never。
* */
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
/*
*
*
* 类型断言
* 有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。
*
*
* 通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。
* 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。
* 它没有运行时的影响，只是在编译阶段起作用。
* TypeScript会假设你，程序员，已经进行了必须的检查。
* */
// 类型断言有两种形式。 其一是“尖括号”语法：
let someValue = "this is a string";
let strLength = someValue.length;
// 另一个为as语法：
let strLength2 = someValue.length;
console.log(strLength2); //16
