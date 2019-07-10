(function (window, undefined) {

  //jQuery的构造函数
  var jQuery = function (selector, context) {
    return new jQuery.fn.init(selector, context);
  };

  //jQuery.fn拿到的是jQuery原型的引用
  jQuery.fn = jQuery.prototype = {
    constructor: jQuery,
    /**
     * jQuery的初始化函数,每次实例化的时候调用的真实函数
     * @param selector 选择器
     * @param context 上下文的范围
     */
    init: function (selector, context) {
      //没有传递 selector 就是是要默认的document代替
      selector = selector || document;
      /*
      * 对selector进行区分
      *   1>直接是一个DOM元素
      *   2>数组类型
      *   3> 函数(function)类型
      *   4>jQuery或者其他的类数组对象类型
      *   5>string类型
      *     a.有context
      *     b.没有context上下文环境
      * */

    },
    size: function () {
    },
    toArray: function () {

    },
    get: function () {
    },
    each: function () {
    },
    eq: function () {
    },
    first: function () {
    },
    last: function () {
    },
    slice: function () {
    },
    map: function () {
    },
    end: function () {
    },
    // push: push,
    sort: [].sort,
    splice: [].splice,
    css: function () {
    },
    html: function () {
    },
  }

  //原型共享,可以使用jQuery.init创建jQuery对象
  jQuery.fn.init.prototype = jQuery.fn.prototype;

  //工具函数extend,实现不同模块的聚合,最核心
  /**
   * 一个参数:jQuery本身进行扩展,jQuery实例进行扩展
   * 两个以上的参数:任意对象进行扩展
   * @type {extend}
   */
  jQuery.extend = jQuery.fn.extend = function () {
    var target = arguments[0] || {};//被扩展的对象
    var length = arguments.length;
    var deep = false;//默认为浅拷贝
    var i = 1;//默认从2个参数进行处理
    var options;//当前扩展的对象
    var name;//扩展对象的属性值

    var copyIsArray, clone;//递归深度克隆的属性值为数组

    //第一个参数为 布尔值得时候,进行深度的拷贝
    if (target.constructor == Boolean) {
      deep = true;
      target = arguments[1];
      i = 2;
    }

    //一个参数,本身进行扩展,实例扩展
    if (typeof target !== 'object' && typeof target != "function") {
      target = {};
    }

    //:如果只传入了一个参数, 那么扩展的就是jQuery自身:
    if (length === i) {
      //当前的this就是jQuery
      target = this;
      --i;
    }

    //两个及其以上的参数
    for (; i < length; i++) {
      //arguments[i]:需要扩展的对象,将非null的对象进行扩展
      if ((options = arguments[i]) != null) {
        for (name in options) {
          var src = target[name];//被扩展对象
          var copy = options[name];//扩展对象,当前的name属性对应的属性值

          //不把自己的引用作为自己的一个成员
          if (target === copy) {
            continue;
          }
          //深度克隆,递归的调用方法
          //,要是没有nodeType, 就是非Dom对象引用, 可以对它进行深度拷贝
          // if (deep && typeof copy == 'object' && !copy.nodeType) {
          // if (deep && copy&&(copy object|| copy Array)) {
          if (deep && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {

            //要拷贝的值为数组
            if (copyIsArray) {
              copyIsArray = false;
              clone = copy && jQuery.isArray(src) ? src : [];
            } else {//对象
              clone = src && jQuery.isPlainObject(src) ? src : {};
            }
            target[name] = jQuery.extend(deep, clone, copy);
          }
          // 如果要加进来的引用不是对象的引用(可能是函数、简单变量，只要不是undefined ) 那就把引用加进来:可能是覆盖也可能是新建name这个属性或方法
          else if (typeof copy !== undefined) {
            target[name] = copy;
          }
        }
      }
    }
    return target;
  };

  //扩展类型检测函数
  jQuery.extend({
    isPlainObject: function (obj) {
      return typeof obj === 'object';
    },
    isArray: function (obj) {
      return toString.call(obj) === '[object Array]';
    }
  });

  //向外暴露构造函数
  window.$ = window.jQuery = jQuery;
})(window);