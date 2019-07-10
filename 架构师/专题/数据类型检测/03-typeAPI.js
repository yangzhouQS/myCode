var class2type = {};

// 生成class2type映射
"Boolean Number String Function Array Date RegExp Object Error Null Undefined".split(" ").map(function (item, index) {
  class2type["[object " + item + "]"] = item.toLowerCase();
})

function type(obj) {
  // 一箭双雕
  if (obj == null) {
    return obj + "";
  }
  return typeof obj === "object" || typeof obj === "function" ?
    class2type[Object.prototype.toString.call(obj)] || "object" :
    typeof obj;
}

console.log(type(null));
console.log(type(undefined));

// isFunction
// 有了 type 函数后，我们可以对常用的判断直接封装，比如 isFunction:

function isFunction(obj) {
  return type(obj) === "function";
}

/*
* 但是还有更复杂的判断比如 plainObject、空对象、Window对象、类数组对象等
* */
console.log(Array.isArray([]));