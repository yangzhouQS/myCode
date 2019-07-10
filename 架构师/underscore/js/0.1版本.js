(function (root) {
  var push = Array.prototype.push;
  //_ 构造函数
  var _ = function (obj) {
    // 如果 obj 已经是 `_` 函数的实例，则直接返回 obj
    if (obj instanceof _) {
      return obj;
    }// 如果不是 `_` 函数的实例
    if (!(this instanceof _)) {
      return new _(obj);
    }
    this.wrap = obj;
  };

  //宿主环境的判断，根据宿主环境判断如何向外暴露全局的变量
  //CMD规范
  if (typeof exports != "undefined" && !exports.nodeType) {
    if (typeof module != "undefined" && !module.nodeType && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }
  _.say = function () {
    console.log("sayHello");
  };


  /**
   * 数组去重的实现
   * @param target
   * @returns {Array}
   */
  _.uniq = function (target, fn) {
    var result = [];
    for (var i = 0, len = target.length; i < len; i++) {
      //回调函数处理每一个数组元素
      var computed = fn ? fn(target[i]) : target[i];
      if (result.indexOf(computed) === -1) {
        result.push(computed);
      }
    }
    return result;
  };
  /**
   * 获取当前对象的所有属性方法
   * @param obj
   * @returns {Array}
   */
  _.getFunctions = function (obj) {
    var result = [];
    for (var key in _) {
      result.push(key);
    }
    console.log(result);
    return result;
  };
  _.isArray = function (obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
  };
  //遍历对象或者遍历数组
  _.each = function (target, fn) {
    //数组的遍历
    if (_.isArray(target)) {
      for (var i = 0, len = target.length; i < len; i++) {
        fn.call(target, target[i], i);
      }
    } else {

    }

  };
  //批量实现类型检测的实现
  _.each(["Function", "Object", "String", "Number"], function (name) {
    _["is" + name] = function (name) {
      return toString.call(obj) === "[object " + name + "]";
    };
  });

  //将_上所有的静态的方法扩展到原型上面
  /*
  *  实现的思路
  *      获取_对象的所有静态方法,组合为数组,以遍历数组的方式批量添加到_对象的原型上面
  * */
  _.mixin = function (obj) {
    _.each(_.getFunctions(obj), function (name) {
      var func = obj[name];//获取_静态方法
      _.prototype[name] = function () {

        //当前的arguments为回调函数
        //目标源 //this.wrap _([1,2,3])
        var arg = [this.wrap];

        //将目标源和回调函数合并传递给静态的方法函数
        push.apply(arg, arguments);

        // console.log(arg);// [Array(8), ƒ]
        return func.apply(this, arg);
        // console.log();
        // func.call(this);
      };
    });

  };


  _.mixin(_);


  //AMD规范
  if (typeof define == "function" && define.amd) {
    //第一个参数：模块名称
    //第二个参数：依赖的模块
    //第三个参数：返回的引用
    define("underscore", [], function () {
      return { _ : _ };
    });
  }
  // root._ = _;
})(this);

/*
* 第一节课:
*   搭建undescore的基本框架
*    完成mixin混合调用
*    each方法/批量添加方法
*    两种调用方法的回调函数的处理
* */

