let util = require('util');
// console.log(util);
let obj = {
  name: 'xianjs',
  home: {
    city: {
      name: "西安的北郊"
    }
  }
};
//util.inspect:指定对象展开的层数
console.log(util.inspect(obj, {depth: 1}));
//{ name: 'xianjs', home: { city: [Object] } }
console.log(util.inspect(obj, {depth: 2}));
//{ name: 'xianjs', home: { city: { name: '西安的北郊' } } }

console.log('------');
console.log(util.inspect({name:'xxx'}));
console.log(util.isArray([]));
console.log(util.isRegExp(/\d/));
console.log(util.isDate(new Date()));
console.log(util.isError(new Error));