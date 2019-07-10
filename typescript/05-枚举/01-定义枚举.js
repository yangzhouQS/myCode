"use strict";
/*枚举的索引是从0开始的
* 手动赋值后面的会覆盖前面的值
*
* */
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Block"] = 2] = "Block";
    Colors[Colors["pink"] = 1] = "pink";
})(Colors || (Colors = {}));
console.log(Colors[0]); //Red
console.log(Colors.Red); //0
console.log(Colors[1]);
