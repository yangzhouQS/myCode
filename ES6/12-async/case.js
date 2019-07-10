let eat = x => {
  console.log('你终于吃到饭了....', x);
};

let after = (num, fn) => {
  let count = 0;
  return function (x) {
    if (++count === num) {
      fn(x);
    }
  }
}
let newEat = after(3, eat)
newEat('20')
newEat('20')
newEat('20')