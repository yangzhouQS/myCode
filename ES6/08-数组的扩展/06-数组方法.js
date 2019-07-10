let arr = [1, 2, 3, 4, 6, 7];
let result = arr.reduce((prev, next, currentIndex) => {
  return prev + next;
});
console.log(result);
console.log([{price: 20}, {price: 10}, {price: 30}].reduce((prev, next, index, ary) => {
  return prev + next.price;
}, 0));//60

Array.prototype.myReduce = function (fn, prev) {
  for (let i = 0; i < this.length; i++) {
    if (typeof prev === 'undefined') {
      prev = fn(this[i], this[i + 1], i + 1, this);
      ++i;
    } else {
      prev = fn(prev, this[i], i, this);
    }
  }
  return prev;
}
console.log([1, 2, 3].myReduce((prev, next, index, arr) => prev + next));//6
