/*
* 第一部分：
*    根据宿主环境保向外暴露不同的接口
*    搭建underscore的基本框架
*    uniq方法的基本测试/完成两种方式调用此方法
*    完成mixin混合调用
*    each方法/批量添加数据类型的判断方法
*    两种调用方法的回调函数的处理（核心）
* =============================================
* 第二部分
*   链式调用的实现
*   chain
*   辅助方法:result
*   value:返回数据
*   keys:返回对象的所有key
*   迭代器
*     map方法
*     [
*       cb()方法：根据传递回掉函数参数的个数做出相应的判断
*       optimizeCb迭代器的优化方法
*     ]
* =============================================
* 第三部分
*   for...in... 兼容处理
*   控制函数执行的次数
*   reduce
*   filter
*   every
*   some
*/
(function (root, undefined) {

  //缩短查询的路径
  var toString = Object.prototype.toString;
  var push = Array.prototype.push;
  var nativeKeys = Object.keys;


  /**
   * _是构造函数，是_的实例直接返回，不是_的实例创建一个_的实例直接返回
   * 将传递的数据保存的实例的warp属性中，以便后面混入时调用
   * @param obj
   * @returns {*}
   * @private
   */
  var _ = function (obj) {
    if (obj instanceof _) {
      return obj;
    }
    if (!(this instanceof _)) {
      return new _(obj);
    }
    this.warp = obj;
  };
  /**
   * 宿主环境的检测
   * 根据宿主环境的不同向外暴露接口
   * exports 和 module
   */
  if (typeof exports !== "undefined" && !exports.nodeType) {
    //node导出
    if (typeof module !== "undefined" && !module.nodeType && module.exports) {
      module.exports = _;
    }
    exports._ = _;
  } else {//windows
    root._ = _;
  }
  //AMD规范的兼容写法
  if (typeof define === "function" && define.amd) {
    define("undescore", [], function () {
      return _;
    });
  }
  /**
   * 数组去重
   * @param obj
   * @param func
   * @returns {Array}
   */
  _.uniq = function (obj, func) {
    var result = [];
    _.each(obj, function (value) {
      var computed = func ? func(value) : value;
      if (result.indexOf(computed) === -1) {
        result.push(computed);
      }
    });
    return result;
  };
  /*
    原型上的方法：最后使用mixin混入到原型链上
  _.prototype.uniq = function (obj) {
    console.log(obj);
  }*/

  var optimizeCb = function (func, context, argCount) {
    if (context === void 0) {
      return func;
    }
    switch (argCount == null ? argCount = 3 : argCount) {
      case 3:
        return function (value, index, collection) {
          func.call(context, value, index, collection);
        };
    }
  };

  /**
   * cb 函数接收回调函数和上下文环境
   * 回调函数判断成立时
   * @param value
   * @param context
   * @param argCount  不传递使用的是undefined
   * @returns {*}
   */
  var cb = function (iteratee, context, argCount) {
    /*
    * 没有传递回掉函数
    * */
    if (iteratee == null) {
      return _.identity;
    }
    /*
    * 传递回掉函数，调用回掉处理优化函数optimizeCb函数继续优化
    * */
    if (_.isFunction(iteratee)) {
      return optimizeCb(iteratee, context, argCount);
    }
  };
  /**
   * 判断传入的是数组还是对象
   * 根据传递的回掉函数确定不同的迭代器
   * @param obj
   * @param iteratee
   * @param context
   * @returns {Array}
   */
  _.map = function (obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    /*
    * obj ==>数组 keys=false
    * obj ==>对象 keys= 为对象的所有属性，返回的是对象的所有属性数组
    * */
    var keys = !_.isArray(obj) && _.keys(obj);
    /*
    * 对象为数组时：|| 运算计算的是右边obj数组obj长度
    * keys为对象时：回去的是对象属性组成数组的长度
    * */
    var len = (keys || obj).length;
    var result = [];
    for (var index = 0; index < len; index++) {
      /**
       * currentKey :是对象的话就是对象的属性值，数组的话就是数组的索引下标
       * @type {number}
       */
      var currentKey = keys ? keys[index] : index;
      /*
       * 将处理的结果存储在数组中返回给回掉函数
       */
      result[index] = iteratee(obj[currentKey], index, obj);
    }
    console.log(len);
    return result;
  };
  _.identity = function (value) {
    return value;
  };
  //===each方法
  _.each = function (target, func) {
    if (_.isArray(target)) {
      for (var i = 0, len = target.length; i < len; i++) {
        func.call(target, target[i], i, target);
      }
    } else {//应该是对象的遍历方式
      var keys = _.keys(target);

    }
  };
  /**
   * 回去对象的key
   * @param target
   * @returns {*}
   */
  _.keys = function (target) {
    if (!_.isObject(target)) {
      return [];
    }
    if (nativeKeys) {
      return nativeKeys(target);
    }
    var result = [];
    for (var key in target) {
      result.push(key);
    }
    return result;
  };

  //====数据类型的判断
  /**
   *  isArray isObject 'String', 'Number', 'Error', 'Boolean', 'RegExp', 'Arguments', 'Date'
   * @param target
   * @returns {boolean}
   */
  _.isArray = function (target) {
    return toString.call(target) === "[object Array]";
  };
  _.isObject = function (obj) {
    return (typeof obj === "function") || (typeof obj === "object" && !!obj);
  };
  _.isFunction = function (obj) {
    return typeof obj === "function" || false;
  };
  _.each(["String", "Number", "Error", "Boolean", "RegExp", "Arguments", "Date"], function (name) {
    _["is" + name] = function (target) {
      return toString.call(target) === "[object " + name + "]";
    };
  });
  _.functions = function (obj) {
    var result = [];
    for (var key in obj) {
      result.push(key);
    }
    console.log(result);
    result.sort();
    return result;
    //for .... in循环有兼容性
  };

  /**
   * 开启链式调用
   * @param obj
   * @returns {*}
   */
  _.chain = function (obj) {
    var instance = new _(obj);
    instance._chain = true;
    return instance;
  };
  /**
   * 链式调用的辅助方法
   * @param instance
   * @param obj
   * @returns {*}
   */
  var result = function (instance, obj) {
    return instance._chain ? _(obj) : obj;
  };
  /*_.values = function (obj) {
    // console.log(obj);
    // console.log(this);
    // return this.warp;
    return obj ? obj.warp : _.warp;
  }*/
  _.prototype.values = function () {
    return this.warp;
  };

  //=========mixin混入
  /**
   * 将静态的方法混入到原型连上
   * @param obj
   */
  _.mixin = function (obj) {
    _.each(_.functions(obj), function (name) {
      var func = _[name];//_对象的静态方法
      _.prototype[name] = function () {
        // arguments 为以调用第二种方式调用方式传递的参数
        var args = [this.warp];
        push.apply(args, arguments);
        //this为当前的实例
        // var res = func.call(this, this.warp);
        // var res = func.apply(this, args);
        var res = result(this, func.apply(this, args));
        return res;
      };
    });
  };
  _.mixin(_);
})(this);