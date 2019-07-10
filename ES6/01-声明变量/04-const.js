/*
const声明的常量不存在变量的提升,只有定义后才可以使用
定义的常量无法被重新赋值
第常量时必须进行初始化,否则报错










const定义的变量存在块级作用域
const声明的变量不可以重新赋值
const声明的变量必须进行初始化


*/

const d = {name: 'web前端', age: 100};d.name = 'web后端';//{ name: 'web后端', age: 100 }

console.log(d);


