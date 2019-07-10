let s = Symbol('描述');
let a = {};
//1 - key设置
a[s] = 'xian';
//2 - 直接创建对象时使用Symbol
let b = {
  [s]: 'xian'
};
console.log(b);//{ [Symbol(描述)]: 'xian' }
//3 - Object.defineProperty
let c = {};
console.log(c);
Object.defineProperty(c, s, {
  value: 'xian'
});
console.log(c);

//读取属性
console.log(b[s]);//xian