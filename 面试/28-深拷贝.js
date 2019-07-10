let arr = [1, 2, 3, 'a', [{
  function() {
  }
}]];
//浅拷贝
let arr2 = arr.slice(0);

//数组的深拷贝
function copyArray(src, target) {
  target = target || [];
  if (toString.call(src) !== '[object Array]') return target;
  for (let i = 0, len = src.length; i < len; i++) {
    target.push(src[i]);
  }
  return target;
}

//数组的简单深拷贝
let arr3 = copyArray(arr);
arr3[0] = 99;

function deepClone(src, target) {
  let isObject = function (target) {
    if (target === null) {
      return null;
    }
    return typeof target === 'object';
  };
  let isArray = function (arg) {
    return toString.call(arg) === '[object Array]';
  };
  let cloneArray = function (arr, target) {
    target = target || {};
    for (let i = 0, len = arr.length; i < len; i++) {
      target.push(arr[i]);
    }
  }
  target = target || {};
  for (const key in src) {
    let cur = src[key];
    if (isObject(cur)) {
      target[key] = deepClone(cur, target);
    } else if (isArray(src)) {
      let args = [];
      for (let i = 0, len = cur.length; i < len; i++) {
        if (isObject(cur[i])) {
          args.push(deepClone(cur[i]));
        } else if (isArray(cur[i])) {

        }
      }
      target[key] = args;
    }
    console.log(key);
  }
}

let o = {
  name: '李四',
  list: [1, 3, {sex: '男'}, null],
  getName: function () {
    console.log(this.name);
  }
};
deepClone(o)
