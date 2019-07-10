let _ = require('./js/underscore 1.9');

var identity = function (value) {
  return value;
};

var cb = function (value, context, argCount) {
  if (value == null) return identity;
  /*if (isFunction(value)) return optimizeCb(value, context, argCount);
  if (isObject(value)) return matcher(value);
  return property(value);*/
};

function map(obj, iteratee, context) {
  // 根据 context 确定不同的迭代函数
  iteratee = cb(iteratee, context);
  console.log(iteratee);

  /*  // 如果传参是对象，则获取它的 keys 值数组（短路表达式）
    var _keys = !isArrayLike(obj) && keys(obj),
      // 如果 obj 为对象，则 length 为 key.length
      // 如果 obj 为数组，则 length 为 obj.length
      length = (_keys || obj).length,
      results = Array(length); // 结果数组

    // 遍历
    for (var index = 0; index < length; index++) {
      // 如果 obj 为对象，则 currentKey 为对象键值 key
      // 如果 obj 为数组，则 currentKey 为 index 值
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }

    // 返回新的结果数组
    return results;*/
};

var obj = {name: "李四", age: 26};
map(null);

_.map(obj, function (x) {
  console.log(x);
});
console.log(_.map(obj));





