const fs = require('fs');
//fs.open(filename, flags, [mode], callback);
/**
 * filename, 必选参数，文件名
 * flags, 操作标识，如"r",读方式打开
 * [mode],权限，如777，表示任何用户读写可执行
 * callback 打开文件后回调函数，参数默认第一个err,第二个fd为一个整数，表示打开文件返回的文件描述符，window中又称文件句柄
 */
fs.open(__dirname + "/nihao.txt", "r+", (error, fd) => {
  if (error) {
    console.log(error);
    return;
  } else {
    console.log(fd);//3
    let buffer = new Buffer(255);//每个汉字是3个字符,英文是1个字符

    fs.read(fd, buffer, 0, 9, 3, function (err, bytesRead, buffer) {
      if (err) {
        throw err;
      } else {
        console.log(bytesRead);
        console.log(buffer.slice(0, bytesRead).toString());
        //读取完后，再使用fd读取时，基点是基于上次读取位置计算；
        fs.read(fd, buffer, 0, 9, null, function (err, bytesRead, buffer) {
          console.log(bytesRead);
          console.log(buffer.slice(0, bytesRead).toString());
        });
      }
    });
  }
});

// fs.read(fd, buffer, offset, length, position, callback);
/**
 * fd, 使用fs.open打开成功后返回的文件描述符
 * buffer, 一个Buffer对象，v8引擎分配的一段内存
 * offset, 整数，向缓存区中写入时的初始位置，以字节为单位
 * length, 整数，读取文件的长度
 * position, 整数，读取文件初始位置；文件大小以字节为单位
 * callback(err, bytesRead, buffer), 读取执行完成后回调函数，bytesRead实际读取字节数，被读取的缓存区对象
 */
// fs.read();
