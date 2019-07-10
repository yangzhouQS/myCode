/**
 * 数组类型的检测
 * @type {((arg: any) => arg is Array<any>) | (function(*=): boolean)}
 */
let isArray = Array.isArray || function (target) {
  return Object.toString.call(target) === '[object Array]';
};
/**
 * null检测
 * @param target
 * @returns {boolean}
 */
let isNull = function (target) {
  return target === null;
};
/**
 * 布尔值的检测
 * @param obj
 * @returns {boolean}
 */
let isBoolean = function (obj) {
  return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
};
/**
 * undefined检测
 * @param obj
 * @returns {boolean}
 */
let isUndefined = function (obj) {
  return obj === void 0;
};
/**
 * 检测对象是否含有指定的key
 * @param obj
 * @param key
 * @returns {boolean}
 */
let has = function (obj, key) {
  return obj !== null && Object.prototype.hasOwnProperty.call(obj, key);
};
let arrObj = ['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'];



