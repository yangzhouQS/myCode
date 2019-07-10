const _ = require("underscore");
let arr = [3, 5, 2];
let obj = {name: 'xianjs', age: 26, gender: '男'};
// mapObject_.mapObject(object, iteratee, [context])
// 它类似于map，但是这用于对象。转换每个属性的值。
console.log(_.mapObject(obj, (v, k) => {
  if (_.isNumber(v)) {
    return v + 10
  } else {
    return v;
  }
}));
