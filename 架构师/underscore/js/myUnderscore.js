(function (root) {
  // var _ = {};//underscore对象//不可以实例调用,需要修改的
  var _ = function (obj) {

    /*
    * underscore对象方法调用和underscore实例方法调用的实现
    * */
    //console.log(this);
    // 如果 obj 已经是 `_` 函数的实例，则直接返回 obj
    if (obj instanceof _) {
      return obj;
    }
    //obj不是`-`函数的实例,new返回`-`函数的实例
    if (!(this instanceof _)) {
      return new _(obj);
    }
    // 将 obj 赋值给 this._wrapped 属性
    this._wrapped = obj;
  };

  /*
  * 宿主环境的检测
  * 客户端的root为window,服务端node root为exports
  * 实现将上面全局变量_暴露到全局对象,window_=_;服务端:exports._=_;
  *
  * commonjs 规范的实现
  */
  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  /*
  * 兼容AMD规范的实现
  * */
  if (typeof define === 'function' && define.amd) {
    //define是否有依赖
    define('underscore', [], function () {
      return {
        _: _,
      };
    });
  }

  //在underscore对象上扩展方法
  _.uniq = function (target) {
    var l = target.length;
    var result = [];
    for (var i = 0; i < l; i++) {
      var cur = target[i];
      if (result.indexOf(cur) === -1) {
        result.push(cur);
      }
    }
    return result;
  };
  //不可以忍受每个方法写两遍
  /* _.prototype.uniq = function () {
     console.log('uniq');
   };*/


  //将underscore对象暴露出去
  // return root._ = _;
  /*
  *   传入一个对象
  *   遍历该对象的键值对（包括 own properties 以及 原型链上的）
  *   如果某个 value 的类型是方法（function），则将该 key 存入数组
  *   将该数组排序后返回
  * */
  _.functions = _.methods = function (obj) {
    var result = [];
    for (var objKey in obj) {
      result.push(objKey);
    }
    return result;
  }

  /*
  *  与 ES5 中 Array.prototype.forEach 使用方法类似
  遍历数组或者对象的每个元素
  第一个参数为数组（包括类数组）或者对象
  第二个参数为迭代方法，对数组或者对象每个元素都执行该方法
  该方法又能传入三个参数，分别为 (item, index, array)（(value, key, obj) for object）
  与 ES5 中 Array.prototype.forEach 方法传参格式一致
  第三个参数（可省略）确定第二个参数 iteratee 函数中的（可能有的）this 指向
  即 iteratee 中出现的（如果有）所有 this 都指向 context
  notice: 不要传入一个带有 key 类型为 number 的对象！
  notice: _.each 方法不能用 return 跳出循环（同样，Array.prototype.forEach 也不行）
  * */
  /*
  * 遍历的目标,回调函数,上下文环境
  * */
  _.each = _.forEach = function (obj, callback, context) {
    if (_.isArray(obj)) {
      for (var i = 0; i < obj.length; i++) {
        callback.call(obj, obj[i], i);
      }
    } else {
      for (var objKey in obj) {
        callback.call(context, objKey, obj[objKey]);
      }
    }
    // 返回 obj 参数
    // 供链式调用（Returns the list for chaining）
    // 应该仅 OOP 调用有效
    return obj;
  };

  /*
  * 数据类型检测
  * */
  _.isArray = Array.isArray || function (obj) {
    return toString.call(obj) === '[object Array]';
  };
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function (name) {
    _['is' + name] = function (obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });
  /*
  * mixin()遍历underscore对象的所有方法添加到原型上面
  * 遍历 obj 的 key，将方法挂载到 Underscore 上
  * 其实是将方法浅拷贝到 _.prototype 上
  * */
  _.mixin = function (obj) {
    /*
    * each:遍历的是一个数组
    * */
    _.each(_.functions(obj), function (name) {
      var func = obj[name];
      _.prototype[name] = function () {
        // console.log(this);
        func.call(this);
      };
    });
  };
  // 将前面定义的 underscore 方法添加给包装过的对象
  // 即添加到 _.prototype 中
  // 使 underscore 支持面向对象形式的调用
  _.mixin(_);
})(this);

//console.log(toString.call([]).slice(8, -1) === 'Array');





