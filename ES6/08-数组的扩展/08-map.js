Array.prototype.myMap = function (callback) {
  let ary = [];
  for (let i = 0; i < this.length; i++) {
    ary.push(callback(this[i], i, this));
  }
  return ary;
}
;[1, 2, 3].myMap((item, index, ary) => {
  console.log(item, index, ary);
})
console.log([1, 2, 4].map((item, index, ary) => item * 2))
let obj = {name: "tom"};
;[1, 2, 4].map((item, index, ary) => {
  console.log(item * 3);
}, obj)

