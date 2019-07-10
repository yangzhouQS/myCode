console.log('main开始');
const a = require('./a');
const b = require('./b');
console.log('在main中', a.finish, b.finish);