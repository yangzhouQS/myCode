"use strict";
let obj = {
    name: '李四',
    age: 26,
};
let obj2 = {
    name: "李四",
};
console.log(obj, obj2);
let obj3 = {
    name: "大牛",
    age: 0,
    sex: '男',
};
let obj4 = {
    name: 'tom',
    age: 26,
};
//修改age
obj4.age = 26;
//修改只读属性
// obj4.name='jack';//禁止修改的
console.log(obj4);
let func2;
func2 = function (a, b) {
    return a - b > 0;
};
console.log(func2(1, 3));
