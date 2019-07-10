const _ = require("underscore");
let arr = [3, 5, 2];

console.log(_.chain(arr).map(x => x * 2).value());
//[ 6, 10, 4 ]
