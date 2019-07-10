/*var flatten = function (input, shallow, strict, output) {
  output = output || [];
  var idx = output.length;
  //遍历input参数。
  for (var i = 0, length = getLength(input); i < length; i++) {
    var value = input[i];
    if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
      // Flatten current level of array or arguments object.
      //如果input数组的元素是数组或者类数组对象，根据是否shallow来展开，如果shallow为true，那么只展开一级。
      if (shallow) {
        var j = 0, len = value.length;
        while (j < len) output[idx++] = value[j++];
      } else {
        //如果shallow为false，那么递归展开所有层级。
        flatten(value, shallow, strict, output);
        idx = output.length;
      }
    } else if (!strict) {
      //如果value不是数组或类数组对象，并且strict为false。
      //那么直接将value添加到输出数组，否则忽略value。
      output[idx++] = value;
    }
  }
  return output;
};*/
var isArray = function (obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
};

function flatten(array, result) {
  array = array || [];
  result = result || [];//递归调用自己时第二个参数为传递以处理的数组
  if (!isArray(array)) {
    throw Error("Please input Array")
  } else {
    for (var i = 0, len = array.length; i < len; i++) {
      if (isArray(array[i])) {//嵌套的数组继续递归调用自己
        arguments.callee(array[i], result);
      } else {
        result.push(array[i]);
      }
    }
  }
  return result;
}

console.log(flatten([1, 2, 3, [1, 2]]));
