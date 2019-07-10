// let A = require('./a');
// console.log(A.func(7, 8));
const fs = require('fs');
const path = require('path');
fs.readFile(path.normalize(__dirname + '/nihao.txt'), (error, data) => {
  if (error) throw error;
  console.log(data.toString());
})
