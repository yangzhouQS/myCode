const _ = require("underscore");
let obj = {name: 'xianjs', age: 26, gender: '男'};
let arr = [3, 5, 2];

//检索object拥有的和继承的所有属性的名称。
function Say(name, age) {
  this.name = name;
  this.age = age;
}

Say.prototype.hi = true;
console.log(_.allKeys(new Say('tom', 26)));
//[ 'name', 'age', 'hi' ]
