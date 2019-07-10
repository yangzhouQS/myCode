let arr = [1, 2, 3, 4, 1, 2];
Array.prototype.uniq = function () {
  var obj = {};
  for (var i = 0; i < this.length; i++) {
    var cur = this[i];
    if (typeof obj[cur] !== 'undefined') { //此时重复
      this[i] = this[this.length - 1];
      this.length--;
      i--;
      continue;
    }
    obj[cur] = cur;
  }
  obj = null;//手动释放
  return this;
};
console.log(arr.uniq());

