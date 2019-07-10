const fs = require("fs");
const read = fileName => {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
}

async function readByAsync() {
  let a1 = await read('1.txt');
  let a2 = await read('2.txt');
  let a3 = await read('3.txt');
  console.log(a1.toString());
  console.log(a2.toString());
  console.log(a3.toString());
}

readByAsync();
/*
* 这个函数和generator函数有些类似，从例子中可以看得出来，async函数在function前面有个async作为标识
* 意思就是异步函数，里面有个await搭配使用
* 每到await的地方就是程序需要等待执行后面的程序
*
* 语义化很强，下面总结一下async函数的特点：
* 语义化强
* 里面的await只能在async函数中使用
* await后面的语句可以是promise对象、数字、字符串等
* async函数返回的是一个Promsie对象
* await语句后的Promise对象变成reject状态时，那么整个async函数会中断，后面的程序不会继续执行
* */
