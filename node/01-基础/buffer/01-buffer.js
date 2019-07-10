// 创建一个长度为 10、且用 0 填充的 Buffer。
const buf1 = Buffer.alloc(10);

// 创建一个长度为 10、且用 0x1 填充的 Buffer。
const buf2 = Buffer.alloc(10, 1);

console.log(buf1);//<Buffer 00 00 00 00 00 00 00 00 00 00>
console.log(buf2);//<Buffer 01 01 01 01 01 01 01 01 01 01>
