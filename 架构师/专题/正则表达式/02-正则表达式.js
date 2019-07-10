/*
1.创建正则表达式
  1.1 创建对象的方式创建正则表达式
  1.2 正则模式放在两个斜杠之间
2.匹配测试:test()方法,返回值为布尔值
3.匹配字符集
   \d:任意数字符号[0-9][0123456789]
   \w:字母数字符号/下划线
   \s:任意空白字符(空格/制表符/换行符等类似的符号)
   \D:非数字符号
   \W:非字母和数字符号
   \S:非空白符号
*/

//1.创建正则表达式
let reg = new RegExp('abc');
let reg2 = /abc/;

//2.匹配测试
console.log(reg.test('abcd'));//true
console.log(reg2.test('abcder'));//true
//匹配以abc开头的字符串
console.log(/^abc/.test('acbcde'));//false

//3.匹配字符集
console.log(/[0123456789]/.test(18));//true
console.log(/[0-9]/.test('15'));//true
//   \w:字母/数字/下划线
console.log(/\w/.test('sds54546'));//true
console.log(/\w/.test('54546'));//true
console.log(/\w/.test('_'));//true
console.log(/\w/.test(''));//false

console.log('----------');
//   \s:任意的空白字符,空格/制表符/换行符等类似的符号
console.log(/\s/.test(''));//空字符串为false
console.log(/\s/.test(' '));//空格 //true
console.log(/\s/.test(' '));//tab键//true

console.log('-------');
//  \D:非数字符号
console.log(/\D/.test('csd'));//true
console.log(/\D/.test('$%^'));//true
//  \W:非字母和数字符号
console.log(/\W/.test('*'));//true
console.log(/\W/.test('+-'));//true
console.log(/\W/.test('ssds'));//false
//  \S:非空白符号
console.log(/\S/.test(' '));//false
console.log(/\S/.test('\t'));//false
console.log(/\S/.test("\\"));//true
console.log(/\S/.test("\""));//true

