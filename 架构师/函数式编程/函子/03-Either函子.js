const Nothing = function (val) {
  this.value = val;
};
Nothing.of = function (val) {
  return new Nothing(val);
};
Nothing.prototype.map = function () {
  return this;
};
const Some = function (val) {
  this.value = val;
};
Some.of = function (val) {
  return new Some(val);
};
Some.prototype.map = function (fn) {
  return this.of(fn(this.value));
};

const Either = {
  Some: Some,
  Nothing: Nothing
};
console.log(Either.Some.of('2'));

