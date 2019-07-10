const fs = require("fs");
const readStream = fs.createReadStream("./nihao.txt");//读取文件留
const writeStream = fs.createWriteStream("nihao.backup.txt");//写入文件流
readStream.pipe(writeStream);//管道流