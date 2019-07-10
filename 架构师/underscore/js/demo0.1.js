(function (root, undefined) {

  //减少原型链的查询
  var push = Array.prototype.push;

  /**
   * 创建_的实例，obj为_的实例直接返回,当前的this不是_的实例,创建实例返回
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

  //=========宿主环境的检测,commonJS规范
  if (typeof exports !== 'undefined' && !exports.nodeType) {
    if (typeof module !== 'undefined' && !module.nodeType && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  /**
   * 数组去重,可以选择第二个参数
   * @param arr
   * @param fn
   * @returns {Array}
   */
  _.uniq = function (arr, fn) {
    var result = [];
    _.each(arr, function (value) {
      var computed = fn ? fn(value) : value;
      if (result.indexOf(computed) === -1) {
        result.push(value);
      }
    });
    return result;
  };
  /* _.prototype.uniq = function () {
     console.log(2);
   };*/

  /**
   * 数组判断
   * @param obj
   * @returns {boolean}
   */
  _.isArray = function (obj) {
    return toString.call(obj) === '[object Array]';
  }
  /**
   * 数组和类数组,对象的遍历
   * @param target
   * @param fn
   */
  _.each = function (target, fn) {
    if (_.isArray(target)) {
      for (var i = 0, len = target.length; i < len; i++) {
        fn.call(target, target[i], i)
      }
    } else {

    }
  };
  /**
   * 获取_对象上的所有方法名称,存储在数组上以供遍历
   * @param obj
   * @returns {Array}
   */
  _.functions = function (obj) {
    var result = [];
    for (var key in obj) {
      result.push(key);
    }
    console.log(result);
    return result;
  };

  //=======静态方法混合到原型上去
  _.mixin = function (obj) {
    _.each(_.functions(obj), function (name) {
      //获取当前对应得原型上的静态的方法
      var func = _[name];
      // console.log(func);
      //获取以对象的调用方式传递的参数
      _.prototype[name] = function () {
        //此时的arguments为传递的回调函数
        //目标源 //this.wrap _([1,2,3])
        var arg = [this.warp];
        //将目标源和回调函数合并传递给静态的方法函数
        push.apply(arg, arguments);
        // console.log(arg);//[ [ 1, 2, 3, 2, 'a', 'b' ], [Function] ]
        return func.apply(this, arg);
        // console.log(func.apply(this, arg));
      };
    });
  };
  _.mixin(_);


  //=========AMD规范的兼容
  if (typeof define == 'function' && define.amd) {
    define("undescore", [], function () {
      return {
        _: _
      }
    });
  }
})(this);

/*
* 第一节课:
*   搭建undescore的基本框架
*    完成mixin混合调用
*    each方法/批量添加方法
*    两种调用方法的回调函数的处理
*/

/*
* 第二节课
*   链式调用的实现
*/
