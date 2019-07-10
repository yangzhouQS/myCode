const compose = (a, b) => c => a(b(c))

/**
 * compose函数接受两个参数a和b返回接受c参数的函数,当用c调用返回的函数的时候,它将用c调用函数b,b的输出作为a的输入
 * @param a
 * @param b
 * @returns {function(*=): *}
 */
function compose2(a, b) {
  return function (c) {
    return a(b(c));
  }
}

/*
* 将给定的数字进行四舍五入
* */
let data = parseFloat('2.56');
let number = Math.round(data);
console.log(number);
console.log(Math.round('2.56'));

/*
* number2就是传说中的函数式组合
* */
let number2 = compose(Math.round, parseFloat);
console.log(number2('2.56'));

/*
* 统计单词的数量
* */
let splitIntoSpace = str => str.split(" ");
let count = (arr) => arr.length;
let str = "xian hello word";
console.log(splitIntoSpace(str));
console.log(count(splitIntoSpace(str)));//3个单词

let countWord = compose(count, splitIntoSpace);
console.log(countWord(str));

