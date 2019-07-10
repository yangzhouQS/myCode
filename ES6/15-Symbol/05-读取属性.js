let obj = {};
let s = Symbol('xx');
obj[s] = 'xianjs';
console.log(obj);

//属性值的访问
// Symbol 值作为对象属性名时，不能用点运算符。
console.log(obj.s);//undefined
console.log(obj[s]);//xainjs
console.log(obj['s']);//undefined
