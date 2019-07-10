/*
* global全局对象
* window里面也是有全局的对象的,但是不可以直接访问,通过window实现的
* 1.global的变量都是全局变量
* 2.所有的全局变量都是global的属性
* */

/*
* 常用的
* console:
*process
*execArgv
* stdout
* stderr
* stdin
* clearImmediate
* clearInterval
* clearTimeout
* setImmediate
*
* */

//D:\Code\typescript\node\01-基础\global
console.log(process.cwd());//打印当前的目录路径
//改变当前操作的路径
process.chdir('../');
console.log(process.cwd());
//D:\Code\typescript\node\01-基础
/*
* rss: 20676608,//常驻内存
  heapTotal: 7708672,堆存的总申请量
  heapUsed: 4333120,已经使用的内存量
  external: 8224 }外部内存的使用量
  */
console.log(process.memoryUsage());

