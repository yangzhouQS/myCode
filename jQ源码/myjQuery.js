(function (root, undefined) {

  /*
  *
  * */
  var toString = Object.prototype.toString;
  var class2type = {};//空对象

  //构造函数,返回的并不是jquery的构造函数
  var jQuery = function (selector, context) {
    return new jQuery.fn.init(selector, context);
  };
  //jQuery.fn拿到jQuery.prototype 的引用
  jQuery.fn = jQuery.prototype = {
    constructor: jQuery,
    init: function () {
    },
    // length: 0,
  };
  //原型上的init方法的原型指向jQuery的原型,这样就可以通过init创建jQuery的对象
  jQuery.fn.init.prototype = jQuery.fn;

  //工具函数jQuery.extend,在jQuery原型和jQuery函数上扩展统一个方法
  /*
  * 1>给任意的对象扩展,传递2个及其以上的参数,第一个为要扩展的对象,其他为需要遍历的对象:$.extend({},obj1,obj2....)
  * 2>给jQuery本身扩展,一个参数,$.extend({})
  * 3>给jQuery实扩展,就是在jQuery的原型上扩展:$.fn.extend({})
  * */
  jQuery.extend = jQuery.fn.extend = function () {
    /*
    * 传递参数的个数
    * 传递参数的类型为[引用的数据类型] [参数不可以为空]
    * 默认的参数个数为1个参数
    * */
    var length = arguments.length;//传递参数的个数
    //第一个参数为:undefined,null,0,'',false使用默认的空对象
    var target = arguments[0] || {};//第一个参数,不传递给个默认的参数
    var i = 1;//是一个指针,指向的是扩展对象
    var option;//当前正在拷贝扩展的对象
    var name;//当前拷贝扩展对象的属性


    //深度拷贝需要使用的
    var deep = false;//是否深度拷贝
    var copyIsArray;


    var src;//被扩展的对象
    var copy;//当前遍历扩展的对象
    var clone;

    // console.log(false.constructor === Boolean);
    /*
    * 第一个参数传递的是布尔类型的值,表示进行深度拷贝
    * target需要重新取值
    * i指针需要修正
    */
    if (target.constructor === Boolean) {
      deep = target;
      target = arguments[1] || {};//被扩展的对象为第二个参数
      i = 2;//要扩展的对象为第三个参数及其以后
    }

    //第一个参数不是对象或者函数就使用默认值 {}
    if (typeof target !== 'object') {
      target = {};
    }

    //=======jquery对象本身扩展
    //如果只传递一个参数那么扩展的就是jquery对象本身
    if (length === i) {
      target = this;
      i--;
    }

    //=======给任意对象进行扩展
    //参数2 任意对象扩展,arguments[0]
    //找到第二个参数
    //第一个参数为任意对象,.....为要扩展的目标对象
    //$.extend(obj,obj2......)
    for (; i < length; i++) {
      // option = arguments[i];//当前正在拷贝的对象
      if ((option = arguments[i]) !== null) {
        //name为扩展目标的对象属性
        for (name in option) {
          //sec //被扩展对象是否有这个属性
          //src没有的属性为undefined
          src = target[name];
          copy = option[name];
          //console.log(copy);

          /*if (src === copy) {//被扩展对象有指定的属性,直接跳过
            continue;
          }*/
          //copy为简单数据类型和引用数据类型:Object/Array
          if (deep && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
            if (copyIsArray) {//有值拷贝的就是数组
              copyIsArray = false;
              clone = src && jQuery.isArray(src) ? src : [];
            } else {//拷贝的是对象
              clone = src && jQuery.isPlainObject(src) ? src : {};
            }
            //递归进行扩展
            target[name] = jQuery.extend(deep, clone, copy);
          } else if (copy !== undefined) {
            //target[name] = option[name];
            target[name] = copy;
          }

        }
      }
    }
    return target;
  };
  jQuery.extend({
    isPlainObject: function (obj) {
      return typeof obj === 'object';
    },
    isArray: function (obj) {
      return toString.call(obj) === '[object Array]';
    },
    /*type: function (obj) {
      return obj == null ? String(null) : class2type[toString.call(obj)] || 'object';
    },*/
    type: function (obj) {
      return obj == null ?
        String(obj) : class2type[toString.call(obj)] || "object";
    },
    /**
     * 类数组的转换
     * @param array 需要转换的数组
     * @param res 转换后返回的数组 [第二个参数为可选参数]
     * @returns {*}
     */
    markArray: function (array, res) {
      var result = res || [];
      var type = jQuery.type(array);
      console.log(jQuery.type([]));
      // let type=Object.prototype
      // console.log(jQuery.type(array));
      if (array != null) {
        if (array.length == null) {

        } else {
          jQuery.merge(result, array);
        }
      }
      return result;
    },
    /**
     * 数组合并,第二个数组和合并到第一个数组的尾巴后面
     * @param first
     * @param second 被合并的数组
     * @returns {*}
     */
    merge: function (first, second) {
      var i = first.length;
      var l = second.length;
      var j = 0;
      //检测第二个参数的的length属性是否为数字
      if (typeof l === 'number') {
        for (; j < len; j++) {
          //将第二个数组对象的值复制到第一个数组对象的列表里面
          first[i++] = second[j];
        }
      } else { // obj={'0':'abc','1':'def'}
        while (second[j] !== undefined) {
          first[i++] = second[j++];
        }
      }
      return first;
    },
  });
  root.$ = root.jQuery = jQuery;
})(this);
