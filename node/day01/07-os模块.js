const os = require('os');
console.log(os.arch());//操作系统的架构x64
// console.log(os.constants);//处理信号等通用的操作系统特定常量的对象
// console.log(os.cpus());//CPU 内核的信息
console.log("系统空闲内存 = ", (os.freemem() / 1024 / 1024 / 1024).toFixed(2) + "G");//2.96G

//os.totalmem()方法以整数的形式返回所有系统内存的字节数.
console.log("系统的内存总量 = ", (os.totalmem() / 1024 / 1024 / 1024).toFixed(2), 'G');//7.90 G
console.log("用户的家目录 = ", os.homedir);
console.log("操作系统的主机名称 = ", os.hostname);
console.log("编译时的操作系统平台", os.platform());//win32
console.log("临时TMP目录 = ", os.tmpdir());//D:\TEMP\TMP
console.log(os.type());//'Windows_NT' 在 Windows系统上.
console.log(os.userInfo());


