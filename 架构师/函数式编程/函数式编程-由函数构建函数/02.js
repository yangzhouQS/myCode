let _ = require("./underscore");
let obj = [1, 2, 3];
console.log(_.chain(obj)
  .map(x => x + 1)
  .sort((a, b) => a - b < 0)
  .filter(x => x < 5)
);




