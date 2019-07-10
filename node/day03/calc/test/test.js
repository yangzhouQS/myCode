const calc = require('../lib/main');
let res = [1, 2, 3].reduce((prev, next) => {
  return prev + next;
});
console.log(res);

