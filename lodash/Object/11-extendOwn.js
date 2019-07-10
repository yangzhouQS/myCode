const _ = require("underscore");
let arr = [3, 5, 2];
let obj = {name: 'xianjs', age: 26, gender: '男'};
//extendOwn_.extendOwn(destination, *sources) Alias: assign
// 类似于 extend, 但只复制自己的属性覆盖到目标对象。（愚人码头注：不包括继承过来的属性）。
let o = {name: "花花"};
_.extendOwn(o, obj);
console.log(o);
//{ name: 'xianjs', age: 26, gender: '男' }


