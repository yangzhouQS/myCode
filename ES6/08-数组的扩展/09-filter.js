let arr = [1, 2, 3, 5];
Array.prototype.myFilter = function (callback, context) {
  context = context || window;
  var ary = [];
  for (var i = 0; i < this.length; i++) {
    var result = callback.call(context, this[i], i, this);
    if (result) {
      ary.push(result);
    }
  }
  return ary;
};
var obj = {name: 'tom'};
arr.myFilter(function (value, index, array) {
  if (value > 2) {
    console.log(value);
  }
}, obj);
