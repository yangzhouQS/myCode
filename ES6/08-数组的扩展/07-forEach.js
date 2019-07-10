Array.prototype.forEach = function (fn) {
  for (let i = 0; i < this.length; i++) {
    fn(this[i], i, this);//原生的forEach没有返回值
  }
};
;[1, 2, 3].forEach((item, index, ary) => console.log(item, index));
