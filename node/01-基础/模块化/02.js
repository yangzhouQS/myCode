let calc = require('./calc');
//module.exports=sum;
// console.log(calc(1, 2, 3, 5, 4));

//exports.b = sum;
// console.log(calc.b(1, 2, 3));

//module.exports.b = sum;
// console.log(calc.b(1, 2, 3));

//global.sum = sum;
console.log(global.sum(1, 2, 3));
// require()方法是有缓存功能的,多次引用只会执行一次的