(function () {

  //环境的判断
  var root = typeof self == 'object' && self.self == self && self ||
    typeof global == 'object' && global.global == global && global ||
    this ||
    {};
  //安全处理构造函数,保存在临时变量上面,在最后释放对_的控制权
  var tmpUnderscore = root._;

  //对于原型链上常用方法进行缓存
  var ArrayProto = Array.prototype;
  var ObjectProto = Object.prototype;
  var SymobolProto = typeof Symbol !== 'undefined' ? Symbol.prototype : null;

  //原型方法的缓存
  var push = ArrayProto.push;
  var slice = ArrayProto.slice;
  var toString = ObjectProto.toString;
  var hasOwnProperty = ObjectProto.hasOwnProperty;

  //ES5提供的原生方法,浏览器支持的话优先使用的
  var nativeIsArray = ArrayProto.isArray;
  var nativeKeys = ObjectProto.keys;
  var nativeCreate = ObjectProto.create;

  // 空函数
  var Ctor = function () {
  };
  //构造函数
  var _ = function (obj) {
    if (obj instanceof _) {
      return obj
    }
    if (!(this instanceof _)) {
      return new _(obj);
    }
    this.wrap = obj;
  };

  //宿主环境判断,underscore挂载在全局
  //commonJS
  if (typeof exports !== 'undefined' && !exports.nodeType) {
    //node环境的检测
    if (typeof module !== 'undefined' && !module.nodeType) {
      module.exports = _;
    }
    exports._ = _;
  } else {//浏览器环境的处理
    root._ = _;
  }
  // AMD兼容的处理
  if (typeof define == 'function' && define.amd) {
    define('underscore', [], function () {
      return _;
    });
  }

  //回调参数的处理
  var optimizeCb = function (func, context, argCount) {
    if (context === void 0) {
      return func;
    }
    switch (argCount == null ? argCount = 3 : argCount) {
      case 1:
        return function (value) {
          func.call(context, value);
        }
      case 3:
        return function (value, index, connection) {
          func.call(context, value, index, connection);
        }
      case 4:
        return function (accumulator, value, index, collection) {
          return func.call(context, accumulator, value, index, collection);
        };
    }
  }

  _.isArray = function (target) {
    return toString.call(target) === '[object Array]';
  };
  _.each = function (target, func) {
    if (_.isArray(target)) {
      for (var i = 0, len = target.length; i < len; i++) {
        func.call(target, target[i], i, target);
      }
    } else {
      //对象的 遍历
    }
  };
  _.uniq = function (target, func) {
    var result = [];
    _.each(target, function (value) {
      var computed = func ? func(value) : value;
      if (result.indexOf(computed) === -1) {
        result.push(computed);
      }
    });
    return result;
  }
  _.prototype.uniq = function () {
    console.log('1');
  };
  let arr = [1, 2, 3, 1, 2, 'a', 'A'];
  console.log(_.uniq(arr, x => {
    return typeof x === 'string' ? x.toLowerCase() : x;
  }));
  console.log(_(arr).uniq());

  //mixin

  //释放对_的控制权
  _.noConflict = function () {
    root._ = tmpUnderscore;
    return this;
  };
})();

