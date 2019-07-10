let i = 0;
/*setInterval(function () {
  i++;
  console.log("i = ", i);
}, 1000);*/
/*
* setInterval(fn,time):指定time事件触发函数fn
* setTimeout(fn,time):time时间后触发函数fn,一次完成就结束
* */
/*setTimeout(function () {
  console.log("一次性结束了..");
}, 1000)*/

console.log("进程的ID = ", process.pid);//进程的ID =  7260
console.log("node版本 = ", process.version);//v8.9.4
// console.log(process.versions);//一个暴露存储node以及其依赖包版本信息的属性
console.log(process.arch);//返回当前CPU的架构
console.log(process.platform);//运行程序所在的平台系统 'darwin', 'freebsd', 'linux', 'sunos' or 'win32'
console.log(process.argv);
console.log(process.execArgv);
console.log(process.execPath);
/*
console.log(process === global.process);//true
console.log(process);*/
console.log(process.env);//{JAVA_HOME,TMP}

console.log(process.versions);

console.log(process.arch);

console.log('操作系统平台 = ', process.platform);//wind32