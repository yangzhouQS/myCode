/*枚举的索引是从0开始的
* 手动赋值后面的会覆盖前面的值
*
* */

enum Colors {Red, Green, Block, pink = 1}

console.log(Colors[0]);//Red
console.log(Colors.Red);//0
console.log(Colors[1]);