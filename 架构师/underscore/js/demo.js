(function (root) {

    //缩短原型的查找
    var ObjProto = Object.prototype;
    var ArrayProto = Array.prototype;
    var FunctionProto = Function.prototype;

    //缩短原型链常用方法的查找
    var toString = ObjProto.toString;//类型检测的基石
    var hasOwnProperty = ObjProto.hasOwnProperty;
    var push = ArrayProto.push;
    var slice = ArrayProto.slice;


    //ES5原生的方法,宿主环境支持时优先使用宿主环境提供的方法
    var nativeKeys = Object.keys;//获取对象的键值
    var nativeIsArray = Array.isArray;//判断是否为数组

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
    if (typeof exports != 'undefined' && !exports.nodeType) {
      if (typeof module != 'undefined' && !module.nodeType && module.exports) {
        exports = module.exports = _;
      }
      exports._ = _;
    } else {
      root._ = _;
    }
    _.say = function () {
      console.log('sayHello');
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
      console.log(result.sort());
      return result;
    };

    /*
     * 是否为数组的判断,优先使用ES5的原生方法 Array.isArray进行判断
     * @type {((arg: any) => arg is Array<any>) | (function(*=): boolean)}
     */
    _.isArray = nativeIsArray || function (obj) {
      return toString.call(obj) === '[object Array]';
    };

    // 判断是否为对象 ==>这里的对象包括 function 和 object
    _.isObject = function (obj) {
      var type = typeof obj;
      return type === 'function' || type === 'object' && !!obj;
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
    _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function (name) {
      _['is' + name] = function (name) {
        return toString.call(obj) === '[object ' + name + ']';
      };
    });

    var optimizeCb = function (func, context, argCount) {
      if (context == void 0) {
        return func;
      }
      switch (argCount == null ? argCount = 3 : argCount) {
        case 1:
          return function (index) {
            return func.call(context, index);
          };
        case 3:
          return function (value, index, obj) {
            return func.call(context, value, index, obj);
          };
      }
    };

    var cb = function (iteratee, context, argCount) {
      //迭代器为空或者传递的值为null，返回的identity函数的引用
      if (iteratee == null) {
        return _.identity;
      }
      if (_.isFunction(iteratee)) {
        return optimizeCb(iteratee, context, argCount);//optimizeCb优化地迭代器
      }
      if (_.isObject(iteratee)) {
        return;
      }
    };


    _.identity = function (value) {
      return value;
    }


    /*===============集合扩展*/
    //通过对 list 里的每个元素调用转换函数(iteratee迭代器)生成一个与之相对应的数组。
    /**
     *
     * @param target /不传返回的是数组的本身
     * @param iteratee 迭代器 /函数/对象/对象字面量
     * @param context 上下文环境 [可选]
     * @returns {string}
     */
    _.map = function (target, iteratee, context) {
      // 根据 context 确定不同的迭代函数
      var iteratee = cb(iteratee, context);
      /*
      * 如果是数组直接使用
      * 如果是对象回去对象的属性key，将key转换为数组
      * */
      var keys = !_.isArray(target) && _.keys(target);
      var length = (keys || target).length;
      var result = [];
      for (var index = 0; index < length; index++) {
        var curKey = keys ? keys[index] : index;
        result[index] = iteratee(target[curKey], index, target);
      }
      return result;
    };


    function createReduce() {
      return function (obj, func) {

      };
    }

    //==============对象扩展
    /*
    * hasEnumBug为true说明浏览器的环境小于9,存在Bug
    * */
    var hasEnumBug = !{valueOf: null}.propertyIsEnumerable('valueOf');

    /*
    * 不可枚举属性的集合
    * */
    var noEnumProps = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'toString'];

    /**
     * for...in...兼容性的处理
     * @param obj
     * @param keys
     */
    function collectProps(obj, keys) {
      var nElen = noEnumProps.length;//不可枚举属性数组的长度
      var constructor = obj.constructor;//obj的构造器//Object
      var proto = constructor.prototype || ObjProto;//当前对象的原型链
      while (nElen--) {
        var key = noEnumProps[nElen];
        if (key in obj && obj[key] !== proto[keys]) {//对象的不可枚举属性和对象原型上的不可枚举属性不相等
          keys.push(key);
        }
      }
    }

    /**
     * 获取对象的所有key
     * @param obj
     * @returns {*}
     */
    _.keys = function (obj) {
      if (!_.isObject()) {
        return [];
      }
      if (nativeKeys) {
        return nativeKeys(obj);
      }
      //IE 9  不支持for...in遍历操作的,需要做兼容性处理
      var keys = [];
      for (var key in obj) {
        keys.push(key);
      }
      if (hasEnumBug) {
        collectProps(obj, keys);
      }
      return keys;
    };

    //=============工具函数的扩展
    _.times = function (n, iteratee, context) {
      iteratee = optimizeCb(iteratee, context, 1);//优化迭代器
      var result = Array(Math.max(0, n));
      for (var i = 0; i < n; i++) {
        result[i] = iteratee(i);
      }
      return result;
    }

    /**
     * 开启链式调用
     * @param obj
     * @returns {*|void}
     */
    _.chain = function (obj) {
      // 无论是否 OOP 调用，都会转为 OOP 形式
      // 并且给新的构造对象添加了一个 _chain 属性
      var instance = _(obj);

      // 标记是否使用链式操作
      instance._chain = true;

      // 返回 OOP 对象
      // 可以看到该 instance 对象除了多了个 _chain 属性
      // 其他的和直接 _(obj) 的结果一样
      return instance;
    };
    //链式调用的辅助方法
    var result = function (instance, obj) {
      // 如果需要链式操作，则对 obj 运行 _.chain 方法，使得可以继续后续的链式操作
      // 如果不需要，直接返回 obj
      // console.log(obj);
      return instance._chain ? _(obj).chain() : obj;
    };
    _.prototype.value = function () {
      return this.wrap;
    }

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
          // return func.apply(this, arg);//数据处理后的返回结果

          return result(this, func.apply(this, arg));
        }
      });

    }


    _.mixin(_);


    //AMD规范
    if (typeof define == 'function' && define.amd) {
      //第一个参数：模块名称
      //第二个参数：依赖的模块
      //第三个参数：返回的引用
      define('underscore', [], function () {
        return {_: _};
      });
    }
    // root._ = _;
  }

)(this);

/*
* 第一节课:
*   搭建undescore的基本框架
*    完成mixin混合调用
*    each方法/批量添加方法
*    两种调用方法的回调函数的处理
*
* 第二节课
*   链式调用的实现
*   chain
*   辅助方法:result
*   value:返回数据
*   迭代器
*     map方法
*
* 第三节课
*   for...in...兼容的处理
*   可枚举属性和不可枚举属性
*     是由对象属性的描述对象来控制的是否可以枚举的
*   控制代码执行的次数:times
*   迭代的方法:reduce方法
*
*/