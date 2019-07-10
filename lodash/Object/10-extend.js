const _ = require("underscore");
let arr = [3, 5, 2];
let obj = {name: 'xianjs', age: 26, gender: '男'};
//extend_.extend(destination, *sources)
// 将source对象中的所有属性简单地覆盖到destination对象上，并且返回 destination 对象. 复制是按顺序的, 所以后面的对象属性会把前面的对象属性覆盖掉(如果有重复)。
let o = {name: '花花'};
_.extend(o, obj);
console.log(o);
//{ name: 'xianjs', age: 26, gender: '男' }


