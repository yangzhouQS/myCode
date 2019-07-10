const m = new Map();
const o = {name: "Tom"};
//1 - 设置键为o对象值为字符串xianjs
m.set(o, "xainjs");
console.log(m);//Map { { name: 'Tom' } => 'xainjs' }
//2 - 判断
console.log(m.has(o));//true
//3 - 获取
console.log(m.get(o));//xainjs
//4 -删除
m.delete(o);
console.log(m.has(o));//false