//处理多参数的函数
/**
 * 处理多参数的函数为一元函数
 * @param fn
 * @returns {curriedFn}
 */
let curry = (fn) => {
  if (typeof fn !== 'function') {
    throw Error("No function provided")
  }
  return function curriedFn(...args) {
    if (args.length < fn.length) {
      return function () {
        //递归调用,等待状态的改变
        return curriedFn.apply(null, args.concat(
          //将argument类数组转换为数组
          [].slice.call(arguments)
        ));
      };
    }
    return fn.apply(null, args);
  };
};

let test = (x, y, z) => x * y * z;
let autoCurry = curry(test);
console.log(autoCurry(2)(3)(5));



