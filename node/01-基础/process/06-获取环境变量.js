//1 - 获取指定的环境变量
console.log(process.env.JAVA_HOME);
//D:\tools\JAVA\jdk1.8.0_181

//2 - 获取当前文件的路径
console.log(__filename);
//D:\Code\typescript\node\01-基础\process\06-获取环境变量.js
console.log(__dirname);
//D:\Code\typescript\node\01-基础\process
let url={
  dev:{},
  pro:{},
  test:{}
};
process.env.mode = 'pro';
if (process.env.mode === 'dev') {
  console.log("开发模式,会打印错误的选项");
} else if (process.env.mode === 'pro') {
  console.log("生产环境,会屏蔽错误信息的");
} else if (process.env.mode === 'test') {
  console.log("测试环境,检测程序的BUG");
} else {
  console.log("process.env.mode找不到重写配置");
}