const tools = require('./tools');
const path = require('path');
//读取的文件
const readFilePath = path.join(__dirname + "/成绩.txt");
//写入的文件
const writeFilePath = path.join(__dirname + "/score.txt");

tools.readFile(readFilePath)
  .then(data => {
    data = data.split(' ').filter(x => x != '').toString().replace(/=/g, ':').replace(/,/g, '\r\n');
    return tools.appendFile(writeFilePath, data);
  }).then(res => {
    console.log(res);
  }).catch(reson => {
    console.log(reson);
  });


/*
console.log({} + []);    // 0
console.log([] + {});    // "[object Object]"
console.log({} + [] == [] + {});    // false
console.log(({} + [] == [] + {}));   // true

console.log( false == null )      // false
console.log( false == undefined ) // false
console.log( false == 0 )         // true
console.log( false == '' )        // true
console.log( false == NaN )       // false

console.log( null == undefined ) // true
console.log( null == 0 )         // false
console.log( null == '' )        // false
console.log( null == NaN )       // false

console.log( undefined == 0)   // false
console.log( undefined == '')  // false
console.log( undefined == NaN) // false

console.log( 0 == '' )  // true
console.log( 0 == NaN ) // false*/
