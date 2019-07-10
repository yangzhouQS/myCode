//截取整数部分
console.log(Math.trunc(3.14));//3
console.log(Math.trunc("3.14"));//3
console.log(Math.trunc("abc"));//NaN
console.log(Math.trunc(false));//0
console.log(Math.trunc(true));//1
console.log(Math.trunc(null));//0
console.log(Math.trunc(undefined));//NaN
console.log(Math.trunc(NaN));//NaN

/*
Math.sign方法用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值。

它会返回五种值。

参数为正数，返回+1；
参数为负数，返回-1；
参数为 0，返回0；
参数为-0，返回-0;
其他值，返回NaN。
* */
console.log(Math.sign(5));//1
console.log(Math.sign(-5));//-1
console.log(Math.sign(-0));//-0
console.log(Math.sign(0));//0
console.log(Math.sign(NaN));//NaN
console.log(Math.sign("NaN"));//NaN

