!(function (root) {
  var _ = function (obj) {
    if (obj instanceof _) {
      return obj;
    }
    if (!(this instanceof _)) {
      return new _(obj);
    }
    this.wrap = obj;
  };
  //模块加载器
  if (typeof exports != "undefined" && !exports.nodeType) {
    if (typeof module && !module.nodeType && module.exports) {
      module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }
  //AMD模块加载
  if (typeof define == "function" && define.amd) {
    define("underscore", [], function () {
      return _;
    });
  }
  _.each = function () {
    console.log("each");
  };
  _.uniq = function () {
    console.log("uniq");
  };
  _.functions = function (obj) {
    for (var key in obj) {
      console.log(key);
    }
  };
  _.functions(_);


})(this);