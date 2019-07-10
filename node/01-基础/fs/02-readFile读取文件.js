const fs = require('fs');
/*
* filename, 必选参数，文件名
* [options],可选参数，可指定flag（文件操作选项，如r+ 读写；w+ 读写，文件不存在则创建）及encoding属性
* callback 读取文件后的回调函数，参数默认第一个err,第二个data 数据
*/
fs.readFile(__dirname + '/nihao.txt', {flag: 'r+', encoding: "utf8"}, (err, data) => {
    if (err) {
      console.log(err.toString());
    }
    console.log(data.toString());
  }
);
//fs.readFile() 函数会缓冲整个文件。 为了最小化内存成本，尽可能通过 fs.createReadStream() 进行流式传输。


// 从某个字符设备创建一个流。
const stream = fs.createReadStream('nihao.txt');
setTimeout(() => {
  stream.close(); // 这可能不会关闭流。
  // 人工标记流末尾，就好像底层资源本身已指示文件结尾一样，允许流关闭。
  // 这不会取消挂起的读取操作，如果存在此类操作，则该过程可能仍无法成功退出，直到完成为止。
  stream.push(null);
  stream.read(0);
}, 100);
