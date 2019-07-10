const calc = require('./calc');


let arr = [1, 2, 3, 4, 5];
console.log(calc.add(1, 2, 3));
arr.reduce((a, b) => {
  console.log(a + b);
  return a + b;
});