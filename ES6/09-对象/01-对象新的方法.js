let o1 = {name: "开发PHP"};
let o2 = {age: 26};
let o3 = Object.assign(o1, o2);//浅拷贝
console.log(o3);
let o4 = {...o1, ...o2};
console.log(o4);
//{ name: '开发PHP', age: 26 }

//2 - __proto__新的属性
let obj = {
  name: "xian",
  age: 26
};
let obj2 = {
  name: "xianjs",
  getAge() {
    return super.age;//super获取父类的属性
  },
  __proto__: obj,
};
console.log(obj2.getAge());//26

let obj3 = {
  name: "xainjs"
};
Object.setPrototypeOf(obj3, obj2);//设置链
console.log(Object.getPrototypeOf(obj3));//获取链
//{ name: 'xianjs', getAge: [Function: getAge] }
console.log(obj3.age);//26