var class2type = {};

var $ = {
  type: function (obj) {
    return obj == null ? null : class2type[toString.call(obj)] || 'object';
  }
};
console.log($.type([]));

/*function type(obj) {
  return obj == null ?
    String(obj) : class2type[toString.call(obj)] || "object";
}*/

var arr = [1, 2, 3];
