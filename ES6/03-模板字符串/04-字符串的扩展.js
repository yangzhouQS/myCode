//字符串的遍历器接口
let s = "我在xianjs";
for (const i of s) {
  console.log("i = ", i);
}

//1 - 字符串中输出变量
let str = "xainjs.net";
console.log(`我的博客地址 = ${str}`);

//2 - 模板字符串
let users = ["李白", "杜甫", "李商隐"];
console.log(users.map(item => `<li>${item}</li>`).join(""));
