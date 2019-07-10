const path = require('path');//核心对象
//1 - path.basename()方法返回一个path的最后一部分
console.log(path.basename(__filename));//02-path.js

//2- path.delimiter :返回平台特定的路径分隔符：
// Windows 上是 ;。
// POSIX 上是 :。
console.log(path.delimiter);//;

//3 - 返回 path 的目录名，类似于 Unix 中的 dirname 命令。
console.log(path.dirname(__filename));
//D:\Code\typescript\node\01-基础\path模块

//4 - 返回 path 的扩展名，即从 path 的最后一部分中的最后一个 .（句号）字符到字符串结束。
console.log(path.extname(__filename));//.js

//5 - 将一个对象格式化为一个路径字符串
console.log(path.format({
  root: '/igroot',
  name: '/home/user'
}));///igroot/home/user

//6 - 判断 path 是否绝对路径。
console.log(path.isAbsolute('/abc/index.js'));//true
console.log(path.isAbsolute('../../abc/index.js'));//false

//7 - 用平台特定的分隔符把所有 path 片段连接到一起，并规范化生成的路径
console.log(path.join(__dirname, '//one', '//two', 'three'));
//D:\Code\typescript\node\01-基础\path模块\one\two\three

//8 - 返回一个对象，其中对象的属性代表 path 的元素。
console.log(path.parse('/home/user/dir/file.txt'));
//{ root: '/',
//   dir: '/home/user/dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }

//9 - path.posix返回为 POSIX 实现的 path 方法。
console.log(path.posix);

//10 - 返回从 from 到 to 的相对路径（基于当前工作目录）
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));
//..\..\impl\bbb

//11 - path.resolve([...paths])#
// 将路径或路径片段处理成绝对路径。

//12 - 返回平台特定的路径片段分隔符：
console.log(path.sep); //\
// Windows 上是 \。
// POSIX 上是 /。

//13 - 返回为 Windows 实现的 path 方法。
console.log(path.win32);

