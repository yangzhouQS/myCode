/*
//第一个版本的柯里化
function curry(fn) {
  fn = fn || arguments[0];
  //传递参数的时候可以传递计算的数据
  var args = [].slice.call(arguments, 1);
  return function () {
    //也可以在调用柯里化以后的函数
    var newArgs = args.concat([].slice.call(arguments));
    return fn.apply(this, newArgs);
  }
}

function add(a, b) {
  return a + b;
}

//第一种调用的方式
var addCurry = curry(add, 1, 2);
console.log(addCurry());
//第二种调用的方式
var addCurry2 = curry(add);
console.log(addCurry2(1, 2));
//第三种方式调用
var addCurry3 = curry(add, 1);
console.log(addCurry3(2));
*/

/*
* 第二个版本的柯里化
*/
function sub_curry(fn) {
  var args = [].slice.call(arguments, 1);
  return function () {
    return fn.apply(this, args.concat([].slice.call(arguments)));
  };
}

function curry(fn, length) {
  length = length || fn.length;
  var slice = Array.prototype.slice;
  return function () {
    if (arguments.length < length) {
      var combined = [fn].concat(slice.call(arguments));
      return curry(sub_curry.apply(this, combined), length - arguments.length);
    } else {
      return fn.apply(this, arguments);
    }
  };
}

let curry2 = (fn) => {
  if (typeof fn !== 'function') {
    throw Error("No function provided")
  }
  //fn需要5个参数,args传递的参数为柯里化后的返回函数调用的时候传递的参数
  //  args.len < fn.len
  return function curriedFn(...args) {
    console.log(args.length);
    if (args.length < fn.length) {
      return function () {
        //递归调用,等待状态的改变
        return curriedFn.apply(null, args.concat(
          //将argument类数组转换为数组
          [].slice.call(arguments)
        ));
      };
    }
    return fn.apply(this, args);
  };
};

function add(a, b, c, d) {
  return [a, b, c, d];
}

var addCurry = curry2(add);
console.log(addCurry(1, 2, 3)(2));