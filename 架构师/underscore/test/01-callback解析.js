var isFunction = function (obj) {
  return typeof obj == 'function' || false;
};
var isObject = function (obj) {
  var type = typeof obj;
  return type === 'function' || type === 'object' && !!obj;
};
var createAssigner = function (keysFunc, undefinedOnly) {
  // 返回函数
  // 经典闭包（undefinedOnly 参数在返回的函数中被引用）
  // 返回的函数参数个数 >= 1
  // 将第二个开始的对象参数的键值对 "继承" 给第一个参数
  return function (obj) {
    var length = arguments.length;
    // 只传入了一个参数（或者 0 个？）
    // 或者传入的第一个参数是 null
    if (length < 2 || obj == null) return obj;

    // 枚举第一个参数除外的对象参数
    // 即 arguments[1], arguments[2] ...
    for (var index = 1; index < length; index++) {
      // source 即为对象参数
      var source = arguments[index],
        // 提取对象参数的 keys 值
        // keysFunc 参数表示 _.keys
        // 或者 _.allKeys
        keys = keysFunc(source),
        l = keys.length;

      // 遍历该对象的键值对
      for (var i = 0; i < l; i++) {
        var key = keys[i];
        // _.extend 和 _.extendOwn 方法
        // 没有传入 undefinedOnly 参数，即 !undefinedOnly 为 true
        // 即肯定会执行 obj[key] = source[key]
        // 后面对象的键值对直接覆盖 obj
        // ==========================================
        // _.defaults 方法，undefinedOnly 参数为 true
        // 即 !undefinedOnly 为 false
        // 那么当且仅当 obj[key] 为 undefined 时才覆盖
        // 即如果有相同的 key 值，取最早出现的 value 值
        // *defaults 中有相同 key 的也是一样取首次出现的
        if (!undefinedOnly || obj[key] === void 0)
          obj[key] = source[key];
      }
    }

    // 返回已经继承后面对象参数属性的第一个参数对象
    return obj;
  };
};

var identity = function (value) {
  return value;
};
var has = function (obj, key) {
  // obj 不能为 null 或者 undefined
  return obj != null && Object.hasOwnProperty.call(obj, key);
};
// Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
// IE < 9 下 不能用 for key in ... 来枚举对象的某些 key
// 比如重写了对象的 `toString` 方法，这个 key 值就不能在 IE < 9 下用 for in 枚举到
// IE < 9，{toString: null}.propertyIsEnumerable('toString') 返回 false
// IE < 9，重写的 `toString` 属性被认为不可枚举
// 据此可以判断是否在 IE < 9 浏览器环境中
var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');

var keys = function (obj) {
  // 容错
  // 如果传入的参数不是对象，则返回空数组
  if (!isObject(obj)) return [];

  // 如果浏览器支持 ES5 Object.key() 方法
  // 则优先使用该方法
  if (Object.key) return Object.key(obj);

  var keys = [];

  // own enumerable properties
  for (var key in obj)
    // hasOwnProperty
    if (has(obj, key)) keys.push(key);

  // Ahem, IE < 9.
  // IE < 9 下不能用 for in 来枚举某些 key 值
  // 传入 keys 数组为参数
  // 因为 JavaScript 下函数参数按值传递
  // 所以 keys 当做参数传入后会在 `collectNonEnumProps` 方法中改变值
  if (hasEnumBug) collectNonEnumProps(obj, keys);

  return keys;
};
var extendOwn = createAssigner(keys);
var isMatch = function (object, attrs) {
  // 提取 attrs 对象的所有 keys
  var keys = _.keys(attrs), length = keys.length;

  // 如果 object 为空
  // 根据 attrs 的键值对数量返回布尔值
  if (object == null) return !length;

  // 这一步有必要？
  var obj = Object(object);

  // 遍历 attrs 对象键值对
  for (var i = 0; i < length; i++) {
    var key = keys[i];

    // 如果 obj 对象没有 attrs 对象的某个 key
    // 或者对于某个 key，它们的 value 值不同
    // 则证明 object 并不拥有 attrs 的所有键值对
    // 则返回 false
    if (attrs[key] !== obj[key] || !(key in obj)) return false;
  }

  return true;
};
var matcher = function (attrs) {
  attrs = _.extendOwn({}, attrs);
  return function (obj) {
    return _.isMatch(obj, attrs);
  };
};

// 闭包
var property = function (key) {
  return function (obj) {
    return obj == null ? void 0 : obj[key];
  };
};


var optimizeCb = function (func, context, argCount) {
  // 如果没有指定 this 指向，则返回原函数
  if (context === void 0)
    return func;

  switch (argCount == null ? 3 : argCount) {
    case 1:
      return function (value) {
        return func.call(context, value);
      };
    case 2:
      return function (value, other) {
        return func.call(context, value, other);
      };

    // 如果有指定 this，但没有传入 argCount 参数
    // 则执行以下 case
    // _.each、_.map
    case 3:
      return function (value, index, collection) {
        return func.call(context, value, index, collection);
      };

    // _.reduce、_.reduceRight
    case 4:
      return function (accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
  }

  // 其实不用上面的 switch-case 语句
  // 直接执行下面的 return 函数就行了
  // 不这样做的原因是 call 比 apply 快很多
  // .apply 在运行前要对作为参数的数组进行一系列检验和深拷贝，.call 则没有这些步骤
  // 具体可以参考：
  // https://segmentfault.com/q/1010000007894513
  // http://www.ecma-international.org/ecma-262/5.1/#sec-15.3.4.3
  // http://www.ecma-international.org/ecma-262/5.1/#sec-15.3.4.4
  return function () {
    return func.apply(context, arguments);
  };
};


var cb = function (value, context, argCount) {
  if (value == null) return identity;
  if (isFunction(value)) return optimizeCb(value, context, argCount);
  if (isObject(value)) return matcher(value);
  return property(value);
};

function iteratee(value, context) {
  return cb(value, context, Infinity);
};

// An internal function for creating assigner functions.
// 有三个方法用到了这个内部函数
// _.extend & _.extendOwn & _.defaults
// _.extend = createAssigner(_.allKeys);
// _.extendOwn = _.assign = createAssigner(_.keys);
// _.defaults = createAssigner(_.allKeys, true);
var createAssigner = function (keysFunc, undefinedOnly) {
  // 返回函数
  // 经典闭包（undefinedOnly 参数在返回的函数中被引用）
  // 返回的函数参数个数 >= 1
  // 将第二个开始的对象参数的键值对 "继承" 给第一个参数
  return function (obj) {
    var length = arguments.length;
    // 只传入了一个参数（或者 0 个？）
    // 或者传入的第一个参数是 null
    if (length < 2 || obj == null) return obj;

    // 枚举第一个参数除外的对象参数
    // 即 arguments[1], arguments[2] ...
    for (var index = 1; index < length; index++) {
      // source 即为对象参数
      var source = arguments[index],
        // 提取对象参数的 keys 值
        // keysFunc 参数表示 _.keys
        // 或者 _.allKeys
        keys = keysFunc(source),
        l = keys.length;

      // 遍历该对象的键值对
      for (var i = 0; i < l; i++) {
        var key = keys[i];
        // _.extend 和 _.extendOwn 方法
        // 没有传入 undefinedOnly 参数，即 !undefinedOnly 为 true
        // 即肯定会执行 obj[key] = source[key]
        // 后面对象的键值对直接覆盖 obj
        // ==========================================
        // _.defaults 方法，undefinedOnly 参数为 true
        // 即 !undefinedOnly 为 false
        // 那么当且仅当 obj[key] 为 undefined 时才覆盖
        // 即如果有相同的 key 值，取最早出现的 value 值
        // *defaults 中有相同 key 的也是一样取首次出现的
        if (!undefinedOnly || obj[key] === void 0)
          obj[key] = source[key];
      }
    }

    // 返回已经继承后面对象参数属性的第一个参数对象
    return obj;
  };
};

// An internal function for creating a new object that inherits from another.
// use in `_.create`
var baseCreate = function (prototype) {
  // 如果 prototype 参数不是对象
  if (!_.isObject(prototype)) return {};

  // 如果浏览器支持 ES5 Object.create
  if (nativeCreate) return nativeCreate(prototype);

  Ctor.prototype = prototype;
  var result = new Ctor;
  Ctor.prototype = null;
  return result;
};


// Math.pow(2, 53) - 1 是 JavaScript 中能精确表示的最大数字
var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;

// getLength 函数
// 该函数传入一个参数，返回参数的 length 属性值
// 用来获取 array 以及 arrayLike 元素的 length 属性值
var getLength = property('length');

// 判断是否是 ArrayLike Object
// 类数组，即拥有 length 属性并且 length 属性值为 Number 类型的元素
// 包括数组、arguments、HTML Collection 以及 NodeList 等等
// 包括类似 {length: 10} 这样的对象
// 包括字符串、函数等
var isArrayLike = function (collection) {
  // 返回参数 collection 的 length 属性值
  var length = getLength(collection);
  return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
};


function map(obj, iteratee, context) {
  // 根据 context 确定不同的迭代函数
  iteratee = cb(iteratee, context);

  // 如果传参是对象，则获取它的 keys 值数组（短路表达式）
  var _keys = !isArrayLike(obj) && keys(obj),
    // 如果 obj 为对象，则 length 为 key.length
    // 如果 obj 为数组，则 length 为 obj.length
    length = (_keys || obj).length,
    results = Array(length); // 结果数组

  // 遍历
  for (var index = 0; index < length; index++) {
    // 如果 obj 为对象，则 currentKey 为对象键值 key
    // 如果 obj 为数组，则 currentKey 为 index 值
    var currentKey = _keys ? _keys[index] : index;
    results[index] = iteratee(obj[currentKey], currentKey, obj);
  }

  // 返回新的结果数组
  return results;
};

var obj = {
  name: "lisi",
  age: "26岁"
};
map(obj, function (x) {
  console.log(x);
})

// Create a reducing function iterating left or right.
// dir === 1 -> _.reduce
// dir === -1 -> _.reduceRight
function createReduce(dir) {
  // Optimized iterator function as using arguments.length
  // in the main function will deoptimize the, see #1991.
  function iterator(obj, iteratee, memo, keys, index, length) {
    for (; index >= 0 && index < length; index += dir) {
      var currentKey = keys ? keys[index] : index;
      // 迭代，返回值供下次迭代调用
      memo = iteratee(memo, obj[currentKey], currentKey, obj);
    }
    // 每次迭代返回值，供下次迭代调用
    return memo;
  }

  // _.reduce（_.reduceRight）可传入的 4 个参数
  // obj 数组或者对象
  // iteratee 迭代方法，对数组或者对象每个元素执行该方法
  // memo 初始值，如果有，则从 obj 第一个元素开始迭代
  // 如果没有，则从 obj 第二个元素开始迭代，将第一个元素作为初始值
  // context 为迭代函数中的 this 指向
  return function (obj, iteratee, memo, context) {
    iteratee = optimizeCb(iteratee, context, 4);
    var keys = !isArrayLike(obj) && _.keys(obj),
      length = (keys || obj).length,
      index = dir > 0 ? 0 : length - 1;

    // Determine the initial value if none is provided.
    // 如果没有指定初始值
    // 则把第一个元素指定为初始值
    if (arguments.length < 3) {
      memo = obj[keys ? keys[index] : index];
      // 根据 dir 确定是向左还是向右遍历
      index += dir;
    }

    return iterator(obj, iteratee, memo, keys, index, length);
  };
}

