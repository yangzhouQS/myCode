console.log("进程的工作目录 = ", process.cwd());
//进程的工作目录 =  D:\Code\typescript\node\01-基础\process

console.log(process.title);//D:\tools\Edit\WebStorm 2018.2.7\bin\runnerw.exe

console.log(process.memoryUsage());

console.log(process.uptime());//node运行时间  0.18

//返回当前的高分辨时间
console.log(process.hrtime());//[ 45897, 901838598 ]

/*
process.abort();
console.log("ss");//执行这句之前程序退出*/

/*process.exit();
process.exit(1);*/















