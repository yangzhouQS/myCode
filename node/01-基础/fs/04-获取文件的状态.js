let fs = require('fs');
let path = require('path');
let isPath = path.join(__dirname, 'nihao.txt');
fs.stat(isPath, (err, stats) => {
  if (err) {
    console.log('出错啦', err);
  }
  console.log(stats);
});


/*
Stats {
  dev: 882093300,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: undefined,
  ino: 5066549580981499,
  size: 49,
  blocks: undefined,
  atimeMs: 1551512595963.6614,
  mtimeMs: 1551512595963.6614,
  ctimeMs: 1551512595963.6614,
  birthtimeMs: 1551019710977.389,
  atime: 2019-03-02T07:43:15.964Z, 最后的存取时间
  mtime: 2019-03-02T07:43:15.964Z, 最后的修改时间
  ctime: 2019-03-02T07:43:15.964Z, 最后的访问时间
  birthtime: 2019-02-24T14:48:30.977Z }

atime:（access time）显示的是文件中的数据最后被访问的时间，比如系统
的进程直接使用或通过一些命令和脚本间接使用。（执行一些可执行文件或脚本）

mtime: （modify time）显示的是文件内容被修改的最后时间，比如用vi编辑
时就会被改变。（也就是Block的内容）

ctime: （change time）显示的是文件的权限、拥有者、所属的组、链接数发
生改变时的时间。当然当内容改变时也会随之改变（即inode内容发生改变和Block内容



*/

