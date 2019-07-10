// Symbol
//
// ES6 引入了一种新的原始数据类型Symbol，表示独一无二的值。它是 JavaScript 语言的第七种数据类型，前六种是：undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、对象（Object）。


//Symbol 值通过Symbol函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。


//1 -
let s = Symbol('s');
console.log(typeof s);//symbol
//Symbol 数据类型，而不是字符串之类的其他类型。


//2 - Symbol函数的参数只是表示对当前 Symbol 值的描述，因此相同参数的Symbol函数的返回值是不相等的。
let s1 = Symbol('x');
let s2 = Symbol('x');
console.log(s1, s2);//Symbol(x) Symbol(x)
console.log(s1 == s2);//false













