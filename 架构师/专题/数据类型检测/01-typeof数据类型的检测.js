/*
*
开发中常见的数据类型的检测
  1>基本数据类型的检测:字符串/数字/布尔值的类型检测
  2>对象/数组类型的检测
  3>复杂数据类型的检测 /日期类型/正则类型的检测/error类型的检测


1. typeof
    typeof 是一元操作符，放在其单个操作数的前面，操作数可以是任意类型。返回值为表示操作数类型的一个字符串。

ES6之前6中数据类型:Undefined、Null、Boolean、Number、String、Object
Undefined=>undefined
Null=>object
Boolean=>boolean
Number=>number
String=>string
Object=>object
日期=>object
error=>object
正则=>object

2. Object.prototype.toString

  当 toString 方法被调用的时候，下面的步骤会被执行：
    1. 如果 this 值是 undefined，就返回 [object Undefined]
    2. 如果 this 的值是 null，就返回 [object Null]
    3. 让 O 成为 ToObject(this) 的结果
    4. 让 class 成为 O 的内部属性 [[Class]] 的值
    5. 最后返回由 "[object " 和 class 和 "]" 三个部分组成的字符串

调用 Object.prototype.toString 会返回一个由 "[object " 和 class 和 "]" 组成的字符串，而 class 是要判断的对象的内部属性。

//十三种数据类型检测
console.log(Object.prototype.toString.call(123));//[object Number]
console.log(Object.prototype.toString.call('123'));//[object String]
console.log(Object.prototype.toString.call(false));//[object Boolean]
console.log(Object.prototype.toString.call(undefined));//[object Undefined]
console.log(Object.prototype.toString.call(null));//[object Null]
console.log(Object.prototype.toString.call([]));//[object Array]
console.log(Object.prototype.toString.call({}));//[object Object]
console.log(Object.prototype.toString.call((new Date())));//[object Date]
console.log(Object.prototype.toString.call((new RegExp())));//[object RegExp]
console.log(Object.prototype.toString.call((new Error())));//[object Error]
console.log(Object.prototype.toString.call(function () {
}));//[object Function]
console.log(Object.prototype.toString.call(Math));//[object Math]
console.log(Object.prototype.toString.call(JSON));//[object JSON]


//14种的数据类型检测
function fn() {
  console.log(Object.prototype.toString.call(arguments));//[object Arguments]
}
fn();








* */
//typeof检测数据类型的返回值为小写字符串
console.log(typeof 123);//number
console.log(typeof 'abc');//string
console.log(typeof {});//object
console.log(typeof undefined);//undefined
console.log(typeof null);//object
console.log(typeof false);//boolean
//Null 和 Object 类型都返回了 object 字符串。

//但是typeof可以检测函数数据类型
console.log(typeof (function () {
}));//function

//检测其他的复杂数据类型返回的都是object
console.log(typeof (new Date()));//object
console.log(typeof (new Error()));//object















