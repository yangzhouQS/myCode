// ES5实现

//es5实现
function partial(fn) {
  var args = Array.prototype.slice.call(arguments); //将类数组对象arguments转为数组
  args.shift();                                     //除去fn参数

  for (var i = args.length; i < fn.length; i++)         //补齐，跟fn的参数列表对应上
    args.push(undefined);

  return function () {
    var remainArgs = Array.prototype.slice.call(arguments), // 剩余参数
      index = 0;
    for (i = 0; i < args.length; i++) {
      args[i] === undefined && (args[i] = remainArgs[index++])
    }

    return fn.apply(this, args);
  }
}

//通过个Function添加原型链的方式实现 es5版
Function.prototype.partial = function () {
  var args = [].slice.call(arguments),
    that = this;
  for (var i = args.length; i < that.length; i++)         //补齐，跟fn的参数列表对应上
    args.push(undefined)

  return function () {
    var remainArgs = [].slice.call(arguments),
      index = 0;

    args.forEach(function (arg, i) {
      arg === undefined && (args[i] = remainArgs[index++])
    })

    return that.apply(this, args)

  }
}
//es6实现
//es6实现
const partial_es6 = (fn,...args) => {
  for (let i = args.length;i<fn.length;i++)         //补齐，跟fn的参数列表对应上
    args.push(undefined)
  return (...remainArgs) => {
    let j = 0;
    args.forEach((arg,i) => arg === undefined && (args[i] = remainArgs[j++]))
    return fn(...args)
  }
}
//通过个Function添加原型链的方式实现 es6版
Function.prototype.partial_es6 = function(...args){
  for (let i = args.length;i<this.length;i++)         //补齐，跟fn的参数列表对应上
    args.push(undefined)

  return (...remainArgs) => {
    let j = 0;
    args.forEach((arg,i) => arg === undefined && (args[i] = remainArgs[j++]))
    return this(...args)
  }
}



function add4(a,b,c,d) {
  return a + b + c + d;
}

var _add4 = add4.partial(1,undefined,3,undefined);

console.log(_add4(2,4)); // 1 + 2 + 3 + 4 = 10




// 那么偏函数还有啥用呢，再来个最简单的例子，比如setTimeout(fn,time)这个函数，那么我们可以固定后面的time参数，这样我们就可以得到很多时间间隔一样的setTimeout函数‘

var setTimeout_1s = partial(setTimeout,undefined,1000);

setTimeout_1s(function(){
  //do something
});
setTimeout_1s(function(){
  //do something
});
