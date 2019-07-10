---
typora-copy-images-to: media
typora-root-url: media
---

# $和jQuery
```
  $()是jQuery的别名

  (function (root, undefined) {

    var jQuery = function (selector, context) {
      return new jQuery.fn.init(selector, context);
    };
    //jQuery.fn拿到jQuery.prototype 的引用
    jQuery.fn = jQuery.prototype = {
      constructor: jQuery,
      init: function () {
        console.log(55);

      },
      length: 0,
    };
    //原型上的init方法的原型指向jQuery的原型,这样就可以通过init创建jQuery的对象
    jQuery.fn.init.prototype = jQuery.fn;
    root.$ = root.jQuery = jQuery;
  })(this);
```


# jQuery对象工具函数的扩展,通过extend函数进行的扩展
> 任意对象的扩展
> jQuery对象的扩展
> jQuery实例的扩展



## extend扩展的三种方式

```
<script type="text/javascript">
  $(function () {
    /*
    *
    * 1.$.extend();
    *     给任意的对象扩展
    * 2.$.extend({})
    *   给jQuery本身扩展
    * 3.$.fn.extend({})
    *   给jQuery实例扩展
    * */
    let obj = {age: 26};
    let o = {name: "李四"};
    $.extend(obj, o);
    console.log(obj);//{age: 26, name: "李四"}
    o.name = 'xxxx';
    console.log(obj);//{age: 26, name: "李四"}

    //2.给jQuery本身扩展
    $.extend({
      work: function () {
        console.log("work");
      }
    });
    $.work();

    //3.给jQuery实例扩展
    $.fn.extend({
      css1: function () {
        console.log('css1');
      }
    });
    $().css1();
  });
</script>
```

# extend工具函数的实现

## 给任意对象扩展实现

```
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
  var i = 1;//默认参数为1
  var option;
  var name;
  if (typeof target !== 'object') {
    target = {};
  }
  //参数1 实例扩展,本身扩展
  if (length === i) {

  }

  //参数2 任意对象扩展,arguments[0]
  //找到第二个参数
  //第一个参数为任意对象,.....为要扩展的目标对象
  //$.extend(obj,obj2......)
  for (; i < length; i++) {
    option = arguments[i];
    if (option !== null) {
      //name为扩展目标的对象属性
      for (name in option) {
        console.log(name);
        target[name] = option[name];
      }
    }
  }
  return target;
};
```

### 调用的方式

```
var obj = {name: "李白"};
var obj2 = {name: "李四", age: 26};
var obj3 = {sex: "男"};
$.extend(obj, obj2, obj3);
console.log(obj);
```

## extend函数深度克隆实现

```
(function (root, undefined) {

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
  });
  root.$ = root.jQuery = jQuery;
})(this);
```

```
var obj = {
  name: "李白", list: {
    say: function () {
      console.log('say');
    }
  }
};
var obj2 = {
  name: "李四", age: 26, list: {
    hello: function () {
      console.log('hello');
    }
  }
};
var obj3 = {sex: "男"};
$.extend(true, obj, obj2, obj3);
console.log(obj);
```

![1550916317726](/1550916317726.png)

# 选择器引擎





 





















