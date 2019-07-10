const _ = require("underscore");
let arr = [3, 5, 2];
let obj = {name: 'xianjs', age: 26, gender: '男'};
// create_.create(prototype, props)
// 创建具有给定原型的新对象，可选附加props 作为 own的属性。基本上，和Object.create一样，但是没有所有的属性描述符。
function Stooge() {
}

var moe = _.create(Stooge.prototype, {name: "Moe"});
console.log(moe);
console.log(Stooge);//Stooge { name: 'Moe' }
let s = new Stooge();//[Function: Stooge]
