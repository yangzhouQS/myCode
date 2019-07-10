"use strict";
//var声明变量的缺陷
/*for (var i = 0; i < 4; i++) {
  console.log('i = ', i);
}
console.log('外部访问a = ', i);//
*/
//let声明变量,块级变量作用域
for (let i = 0; i < 5; i++) {
    console.log('i = ', i);
}
//let声明的变量存在块级作用域
// console.log('外部访问a = ', i);//i is not defined
function theCityThatAlwaysSleeps() {
    let getCity;
    if (true) {
        let city = "Seattle";
        getCity = function () {
            return city;
        };
    }
    return getCity();
}
console.log(theCityThatAlwaysSleeps()); //Seattle
