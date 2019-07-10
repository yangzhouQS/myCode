/*
_.bind = function (func, context) {
  // 如果浏览器支持 ES5 bind 方法，并且 func 上的 bind 方法没有被重写
  // 则优先使用原生的 bind 方法
  if (nativeBind && func.bind === nativeBind)
    return nativeBind.apply(func, slice.call(arguments, 1));

  // 如果传入的参数 func 不是方法，则抛出错误
  if (!_.isFunction(func))
    throw new TypeError('Bind must be called on a function');

  // polyfill
  // 经典闭包，函数返回函数
  // args 获取优先使用的参数
  var args = slice.call(arguments, 2);
  var bound = function () {
    // args.concat(slice.call(arguments))
    // 最终函数的实际调用参数由两部分组成
    // 一部分是传入 _.bind 的参数（会被优先调用）
    // 另一部分是传入 bound（_.bind 所返回方法）的参数
    return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
  };
  return bound;
};
*/
var myBind = function () {

};
var fn = function () {
  console.log(this);
};
fn.bind({name: "李四"})()
fn.myBind({name: "李四"});