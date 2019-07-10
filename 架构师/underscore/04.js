function Container(val) {
  this.value = val;
}

Container.of = function (val) {
  return new Container(val);
};
// console.log(new Container('xx'));
// console.log(Container.of('xx'));
Container.prototype.xmap = function (fn) {
  console.log(this.value);
  return Container.of(fn(this.value));
};






