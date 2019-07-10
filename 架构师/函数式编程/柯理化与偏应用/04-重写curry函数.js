//curry函数处理参数
/**
 * curry修改可以进行判断
 * @param fn
 * @returns {function(...[*]=): *}
 */
let curry = fn => {
  if (typeof fn !== 'function') {
    throw Error('No function provided');
  }
  return function (...args) {
    return fn.apply(null, args);
  };
};

let test = (x, y, z) => x * y * z;
let test2 = (x, y, z) => x + y * z;
let addCurried = curry(test)(1, 2, 5);
let addCurried2 = curry(test2)(1, 2, 5);
console.log(addCurried);//10
console.log(addCurried2);//11
