//partial
function partial() {
  console.log(arguments);
  console.log(Array.prototype.slice.call(arguments));
  console.log([].slice.call(arguments));
}

partial(1, 2, 3, 4, 5);

//偏函数
var toString = Object.prototype.toString; // var isString = function (obj){ // return toString.call(obj) == '[object String]'; // }; // var isFunction = function(obj){ // return toString.call(obj) == '[object Function]'; // };
var isType = function (type) {
  return function (obj) {
    return toString.call(obj) == '[object ' + type + ']';
  };
};
var isString = isType('String');
var isFunction = isType('Function');
var func = function () {
};
console.log(isFunction(func));
