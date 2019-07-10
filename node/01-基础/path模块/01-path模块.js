const path = require('path');
let pth = 'D:\\Code\\typescript\\node\\01-基础\\path模块\\01-path模块.js';
console.log(path.basename(pth));//01-path模块.js,在linux平台获取的有差异
console.log(path.posix.basename(pth));//D:\Code\typescript\node\01-基础\path模块\01-path模块.js
//返回 path 的最后一部分
console.log(path.win32.basename(pth));//01-path模块.js
console.log(path.delimiter);//返回平台特定的路径分隔符：//;


console.log("返回 path 的目录名= ", path.dirname(pth));
//当前操作的目录 =  D:\Code\typescript\node\01-基础\path模块


console.log(path.sep);//   \
console.log(path.win32);//返回为 Windows 实现的 path 方法。

console.log(path.resolve(pth));
console.log(path.normalize(__dirname));
console.log(path.isAbsolute('./02-path.js'));//false//检测是否为绝对路径
// path.join()拼接路径
console.log(__dirname + path.join('/a', 'b'));
console.log(path.basename(__dirname + "/02-path.js"));//02-path.js

//获取平台的分隔符
console.log(path.delimiter);//;
console.log(process.env.PATH.split(path.delimiter));
console.log(path.join('/a', 'b', 'c', 'd/e/d'));//\a\b\c\d\e\d

console.log(path.parse('/home/user/dir/file.txt'));
console.log(path.parse(__dirname + "/02-path.js"));