const _ = require("underscore");
let arr = [3, 5, 2];
let obj = {name: 'xianjs', age: 26, gender: '男'};
//pick_.pick(object, *keys)
// 返回一个object副本，只过滤出keys(有效的键组成的数组)参数指定的属性值。或者接受一个判断函数，指定挑选哪个key。
console.log(_.pick(obj, 'name', 'age'));
console.log(_.pick(obj, (v, k, obj) => _.isNumber(v)));
//{ age: 26 }
