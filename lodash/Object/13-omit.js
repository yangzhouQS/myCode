const _ = require("underscore");
let arr = [3, 5, 2];
let obj = {name: 'xianjs', age: 26, gender: '男'};
//omit_.omit(object, *keys)
// 返回一个object副本，只过滤出除去keys(有效的键组成的数组)参数指定的属性值。 或者接受一个判断函数，指定忽略哪个key。
_.omit({name: 'moe', age: 50, userid: 'moe1'}, 'userid');
// => {name: 'moe', age: 50}
_.omit({name: 'moe', age: 50, userid: 'moe1'}, function (value, key, object) {
  return _.isNumber(value);
});
// => {name: 'moe', userid: 'moe1'}

