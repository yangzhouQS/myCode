module.exports.a = function () {
  console.log('a');
}
module.exports.b = 'b';
let a = function () {
  console.log('a');
}
let b = 'bs';
module.exports = {
  a: a,
  b: b
}

