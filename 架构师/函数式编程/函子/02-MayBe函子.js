/**
 * MayBe函子实现
 * @param val
 * @constructor
 */
const MayBe = function (val) {
  this.value = val;
};
MayBe.of = function (val) {
  return new MayBe(val);
};
/**
 * 增强函数的健壮性
 * @returns {boolean}
 */
MayBe.prototype.isNothing = function () {
  return (this.value === null || this.value === undefined);
};
/**
 * MayBe函子原型上实现map方法
 * @param fn
 * @returns {MayBe}
 */
MayBe.prototype.map = function (fn) {
  return this.isNothing() ? MayBe.of(null) : MayBe.of(fn(this.value));
};
console.log(MayBe.of([1, 2, 3, 4]).value.map(x => x * x));

console.log(MayBe.of('xianjs').map(x => x.toUpperCase()));



