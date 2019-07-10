//深拷贝的实现

/*
* 深拷贝 :递归拷贝
* 对象
* 函数
* 日期
* 正则
* 日期
* */
function deepClone(obj) {
  if (obj === null) {//null
    return null;
  }
  if (obj !== obj) {//NaN
    return NaN;
  }
  if (obj === void 0) {//undefined
    return undefined;
  }
  if (obj instanceof Array) {//数组
    return obj;
  }
  if ({}.toString.call(obj) === "[object Date]" && obj.toString() !== 'Invalid Date' && !isNaN(obj)) {//日期的克隆
    return new Date(obj);
  }
  if ('[object Number]' === {}.toString.call(obj) && isFinite(obj)) {//Number数字类型
    return obj;
  }
  if (obj instanceof RegExp) {
    return new RegExp(obj);
  }
  let o = new obj.constructor();
  for (let key in obj) {
    o[key] = typeof obj[key] === 'object' ? arguments.callee(obj[key]) : obj[key];
  }
  return o;
}

let obj = {
  name: '李四',
  age: 26,
  fireds: ['李白', '豆腐', {
    name: "SB",
    say: function () {
      console.log(5);
    }
  }],
  say: function () {
    console.log(this.name, this.age, this.fireds);
    return function () {
      console.log('abc');
    }
  }
}
let o = deepClone(obj);
console.log(o.fireds);
o.fireds[2].say();
