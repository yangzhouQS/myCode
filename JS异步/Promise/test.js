const readFile = require('./readFile');
readFile.readFile('./a.txt').then(res => {
  console.log(res);
});
