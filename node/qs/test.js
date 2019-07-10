const qs = require('./qs');
console.log(qs);
let obj = { name: 'tom', age: 29 };
console.log(qs.stringify(obj));//name=tom&age=29
console.log(qs.parse('name=tom&age=29'));

