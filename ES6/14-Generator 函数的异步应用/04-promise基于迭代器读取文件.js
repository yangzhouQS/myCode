let fs = require('fs');
let readFile = fileName => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    })
  });
};
let gen = function* () {
  let f1 = yield readFile('./a.txt');
  let f2 = yield readFile('./b.txt');
  console.log(f1.toString());
  console.log(f2.toString());
};

/*
//手动执行上面的 Generator 函数。
let g = gen();
g.next().value.then(data=>{
  // console.log(data.toString());
  g.next().value.then(data=>{
    console.log(data.toString());
  });
});*/

//自动执行器
function run(gen) {
  var g = gen();

  function next(data) {
    var result = g.next(data);
    if (result.done) return result.value;
    result.value.then(function (data) {
      next(data);
    });
  }

  next();
}

run(gen);