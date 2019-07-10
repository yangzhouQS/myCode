// Array


function isArray(arr) {
  return arr instanceof Array;
}

function isArray(arr) {
  return !!arr && arr.constructor == Array;
}

function isArray(arr) {//Prototype.js1.6.0.3
  return arr != null && typeof arr === "object" &&
    'splice' in arr && 'join' in arr;
}

function isArray(arr) {//Douglas Crockford
  return typeof arr.sort == 'function'
}

function isArray(array) {//kriszyp
  var result = false;
  try {
    new array.constructor(Math.pow(2, 32))
  } catch (e) {
    result = /Array/.test(e.message)
  }
  return result;
};

function isArray(o) {// kangax
  try {
    Array.prototype.toString.call(o);
    return true;
  } catch (e) {
  }
  return false;
};

function isArray(o) {//kangax
  if (o && typeof o == 'object' && typeof o.length == 'number' && isFinite(o.length)) {
    var _origLength = o.length;
    o[o.length] = '__test__';
    var _newLength = o.length;
    o.length = _origLength;
    return _newLength == _origLength + 1;
  }
  return false;
}

function isNaN(obj) {
  return obj !== obj
}

function isNull(obj) {
  return obj === null;
}

function isUndefined(obj) {
  return obj === void 0;
}

// 基于实用主义，我们有时不得不妥协。百度的tangram就是典型，
// 与EXT 一样，能想到的都写上，而且判定非常严谨。
baidu.isDate = function (o) {
  return {}.toString.call(o) === "[object Date]" && o.toString() !== 'Invalid Date' && !isNaN(o);
}
baidu.isNumber = function (o) {
  return '[object Number]' == {}.toString.call(o) && isFinite(o);
}


function isFunction(fn) {
  return !!fn && typeof fn != "string" && !fn.nodeName &&
    fn.constructor != Array && /^[\s[]?function/.test(fn + "");
}