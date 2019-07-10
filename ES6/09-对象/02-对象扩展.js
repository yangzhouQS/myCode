//1 - 对象的拷贝
let o1 = {x: 1, y: 3};
let o2 = {x: 10};
Object.assign(o2, o1);
console.log(o2);//{ x: 1, y: 3 }
//后者覆盖前者,并且是浅拷贝

//2 - 在对象的原型上添加属性
let o3 = Object.create({a: 1, b: false});
console.log(o3);

//3 - 属性描述符

let o4 = {x: 1};
o4.y = 100;//添加属性
//使用属性描述符添加属性
Object.defineProperty(o4, 'a', {
  value: 999,//值
  configurable: false,//是否可以配置
  enumerable: false,//是否可以枚举
  writable: false//是否可以写
});
console.log(o4);
for (const o4Key in o4) {
  console.log(o4Key);//a属性不可以枚举循环
}
