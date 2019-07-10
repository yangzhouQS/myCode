/**
 * forEach函数将传进来的数组进行遍历,遍历出来的每个元素作为参数传递给回调函数
 * @param arr 处理的数组
 * @param fn 处理数组每一个元素的回调函数
 */
let forEach = (arr, fn) => {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
};
/**
 * forEachObject实现对对象的遍历,第一个参数为需要遍历的对象,第二个参数为回调处理函数
 * 将对象的属性(key)和值(value)作为回调函数的参数传递
 * @param obj
 * @param fn
 */
let forEachObject = (obj, fn) => {
  for (const objKey in obj) {
    fn(objKey, obj[objKey]);
  }
};

//unless 断言的实现
/**
 * unless:只有当flag为false的时候才会实现
 * @param flag
 * @param fn
 */
let unless = (flag, fn) => {
  if (!flag) {
    fn();
  }
};
/*
forEach(arr, (number) => {
  unless(number % 2, () => {
    console.log(number, ' 是偶数');
  });
});*/

//timers函数:执行制定次数的函数调用
let timers = (timer, fn) => {
  for (let i = 0; i < timer; i++) {
    fn(i);
  }
};
/*timers(10, (n) => {
  unless(n % 2, () => {
    console.log(`${n} 是偶数`);
  });
});*/

//============闭包的使用====================
//========================================
/**
 * tap函数接受参数,返回另外的函数
 * @param value
 * @returns {Function}
 */
const tap = (value) => {
  return (fn) => {
    typeof fn === 'function' && fn(value);
    // console.log(value);
  };
};
/*
forEach([1, 2, 3, 4], (index, value) => {
  tap(value)(() => {
    console.log(value);
  });
  // console.log(value);
});
*/
/*
* unary函数的任务是:接受一个给定多参数的函数,转换为只接受一个参数的函数
* */
const unary = (fn) => {
  return fn.length === 1 ? fn : (arg) => fn(arg);
};
//可以实现将parseInt传入map
// console.log(arr.map(unary(parseInt)));
/**
 * 只允许允许一次给定的函数
 * @param fn
 * @returns {function()}
 */
const once = (fn) => {
  let done = false;
  return function () {
    return done ? undefined : (done = true), fn.apply(this, arguments);
  }
}
//============数组的高阶函数=================
//========================================
/**
 * 遍历数组,传入的fn需要返回布尔值,使用&&需要所有的数组元素都遵循fn的给定条件
 * @param arr
 * @param fn
 * @returns {boolean}
 */
const every = (arr, fn) => {
  let result = true;
  for (let i = 0, len = arr.length; i < len; i++) {
    // console.log(fn(arr[i]));
    result = result && fn(arr[i]);
  }
  return result;
}
//使用for...of重写every函数
const every2 = (arr, fn) => {
  let result = true;
  for (const v of arr) {
    result = result && fn(v);
  }
  return result;
}

/**
 * some():函数,只要满足一个条件为true就返回true
 * @param arr
 * @param fn
 * @returns {boolean}
 */
const some = (arr, fn) => {
  let result = true;
  for (const v of arr) {
    result = result || fn(v);
  }
  return result;
}
/**
 * sotBy:对给定对象的属性进行排序
 * @param property
 * @returns {function(*, *): number}
 */
const sotBy = (property) => {
  return (a, b) => {
    let result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
    return result;
  }
};

/**
 * map():映射函数,接受等待处理的数组,回调函数,上下文环境
 * @param arr 等待处理的数组
 * @param fn 回调函数
 * @param context 上下文环境
 * @returns {Array} 返回处理后的数组
 */
let map = (arr, fn, context) => {
  let res = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    res.push(fn(arr[i], i, arr, context));
  }
  return res;
};

/**
 * 过滤函数
 * @param ary
 * @param callback
 * @param context
 * @returns {Array}
 */
let filter = (ary, callback, context) => {
  let res = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    callback(arr[i]) ? res.push(arr[i]) : null;
  }
  return res;
}

//==============柯里化与偏应用===============
//========================================

//concatAll函数实现将嵌套的数据连接到一个新的数组之中
/**
 * 处理嵌套的数组
 * @param arr
 * @param fn
 * @returns {Array}
 */
let concatAll = (arr, fn) => {
  let results = [];
  for (const value of arr) {
    results.push.apply(results, value);
  }
  return results;
}

/**
 * 求数组的阶乘和数组的和,需要判断第三个参数,第三个参数为处理的起始位置
 * 如果没有传递第三个参数使用默认的数组的第一项为起始的处理位置
 * @param arr
 * @param fn
 * @param initialValue
 * @returns {*[]}
 */
let reduce = (arr, fn, initialValue) => {
  let accumlator;//计数器
  initialValue !== undefined ? accumlator = initialValue : accumlator = arr[0];
  if (initialValue === undefined) {
    for (let i = 1, len = arr.length; i < len; i++) {
      accumlator = fn(accumlator, arr[i]);
    }
  } else {
    for (const value of arr) {
      accumlator = fn(accumlator, value);
    }
  }
  return [accumlator];
};

//zip()函数遍历两个给定的数组
/**
 * 遍历两个数组,先求取数组的最小长度,遍历,使用回调函数处理
 * @param leftArr
 * @param rightArr
 * @param fn
 * @returns {Array}
 */
let zip = (leftArr, rightArr, fn) => {
  let len = Math.min(leftArr.length, rightArr.length);
  let result = [];
  for (let i = 0; i < len; i++) {
    result.push(fn(leftArr[i], rightArr[i]));
  }
  return result;
};

// console.log(zip([1, 2, 3], [4, 5, 6, 7], (x, y) => x + y));//[ 5, 7, 9 ]

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
/*
  let test = (x, y, z) => x * y * z;
  let autoCurry = curry(test);
  console.log(autoCurry(2)(3)(5));//30
*/

//===============组合与管道=================
//========================================

//compose函数:需要实现一个函数的输出作为一个函数的输入
/**
 * compose函数接受两个参数,返回一个函数;
 * 返回的函数接受一个参数作为调用b函数的参数,b函数的输出作为函数a的输入
 * @param a
 * @param b
 * @returns {function(*=): *}
 */
let compose = (a, b) => c => a(b(c));
//统计英文句子单词的数量
/*
let autoWordCount = compose((arr) => arr.length, (str) => str.split(" "));
console.log(autoWordCount("hello Word"));//2
*/


//===================函子=================
//========================================
/**
 * Container函子的实现,不可以使用箭头函数创建,箭头函数无法使用new创建对象
 * @param val
 * @constructor
 */
const Container = function (val) {
  this.value = val;
};
/**
 * Container的工具方法,省略new的使用
 * @param val
 * @returns {Container}
 */
Container.of = function (val) {
  return new Container(val);
};
/**
 * Container原型上实现map函数
 * @param fn
 * @returns {Container}
 */
Container.prototype.map = function (fn) {
  return Container.of(fn(this.value));
};

/**
 * MayBe函子实现
 * @param val
 * @constructor
 */
const MayBe = function (val) {
  this.value = val;
};
MayBe.of = function (val) {
  return new MayBe(val);
};
/**
 * 增强函数的健壮性
 * @returns {boolean}
 */
MayBe.prototype.isNothing = function () {
  return (this.value === null || this.value === undefined);
};
/**
 * MayBe函子原型上实现map方法
 * @param fn
 * @returns {MayBe}
 */
MayBe.prototype.map = function (fn) {
  return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this.value));
};


