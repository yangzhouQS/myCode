//1.ES6的块级作用域
/*var a = 10;
if (true) {
  console.log(a); //ReferenceError: a is not defined
  let a = 13;
}*/

//2.ES5 typeof检测:检测未声明的变量返回的是undefined
// console.log(a);//ReferenceError: a is not defined
// console.log(typeof a);//undefined
//在原有浏览器渲染机制下,基于typeof等逻辑运算符检测一个未被声明过的变量，不会报错，返回UNDEFINED


//3.基于ES6  typeof检测直接报错
// console.log(a);////ReferenceError: a is not defined
console.log(typeof a);//ReferenceError: a is not defined
let a;
//如果当前变量是基于ES6语法处理，在没有声明这个变量的时候，使用TYPEOF检测会直接报错，不会是UNDEFINED，解决了原有的JS的死区







