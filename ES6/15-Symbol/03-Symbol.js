//1 - Symbol基本的数据类型
//2 - 通过函数执行得到
//3 - 不能使用new创建
let s1 = Symbol('只是描述');
console.log(typeof s1);//symbol

//4 - 不可以进行运算
//不可以转换位数字,不可以进行字符串的拼接
let s2 = Symbol('a');
// console.log(s1 + s2);
//TypeError: Cannot convert a Symbol value to a number

//5 - 可以转换为布尔值
console.log(!!Symbol());//true

let ss = Symbol();
let obj = {
  [ss]: "xian"
};
console.log(obj);//{ s2: 'xian' }
console.log(obj[ss]);//xian

let obj2 = {
  name: '西安'
};
obj2[Symbol('addr')] = '北郊';
console.log(obj2);//{ name: '西安', [Symbol(addr)]: '北郊' }


//5 - 不相等
console.log(Symbol() == Symbol());//false

//6 - 可以转换为字符串
console.log(Symbol('xainjs').toString());
//Symbol(xainjs)

