//compose函数:需要实现一个函数的输出作为一个函数的输入
/**
 * compose函数接受两个参数,返回一个函数;
 * 返回的函数接受一个参数作为调用b函数的参数,b函数的输出作为函数a的输入
 * @param a
 * @param b
 * @returns {function(*=): *}
 */
let compose = (a, b) => c => a(b(c));
let data = parseFloat('2.56');
let number = Math.round(data);
console.log(number);//3

let autoNumber = compose(Math.round, parseFloat);
//autoNumber2等价于上面的函数
let autoNumber2 = x => Math.round(parseFloat(x));
console.log(autoNumber('2.56'));//3
console.log(autoNumber2('2.56'));

//统计英文句子单词的数量
let autoWordCount = compose((arr) => arr.length, (str) => str.split(' '));
console.log(autoWordCount('hello Word'));//2

