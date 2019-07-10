const fs = require('fs');
//fs.mkdir(path, [mode], callback);

/**
 * path, 被创建目录的完整路径及目录名；
 * [mode], 目录权限，默认0777
 * [callback(err)], 创建完目录回调函数,err错误对象
 */
fs.mkdir('demo01', err => {
  if (err) {
    console.log(err);
    return;
  }
});


