let curry = function (fn) {
  if (typeof fn !== 'function') {
    throw Error('fn不是一个函数');
  }
  console.log('fn.length = ', fn.length);
  return function curriedFn(...arg) {
    console.log('arg = ', arg);
    console.log('arguments = ', arguments);
    if (arg.length < fn.length) {
      return function () {
        return curriedFn.apply(null, arg.concat([].slice.call(arguments)));
      };
    }
    return fn.apply(null, arg);
  };
};
let add = (x, y) => x + y;
let res = curry(add)(10, 20);
console.log('res = ', res);
let multiply = (x, y, z) => x * y * z;




