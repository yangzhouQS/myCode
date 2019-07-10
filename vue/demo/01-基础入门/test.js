let obj = {
  name: 'xianjs',
  age: 26,
  getName: function () {
    console.log(this.name);
  },
  frides: ['tom', 'sam', 'jack']
};

let isObject = function (target) {
  return target !== null && typeof target == 'object';
};
let isFunction = function (target) {
  return typeof target === 'function';
}
let isArray = function (target) {
  return Object.prototype.toString.call(target) === '[object Array]';
};

for (const key in obj) {
  console.log(isObject(obj[key]));
}


console.log(typeof []);