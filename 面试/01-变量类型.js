console.log(typeof 'xx');//string
console.log(typeof 123);//number
console.log(typeof '123');//string
console.log(typeof false);//boolean
console.log(typeof undefined);//undefined
console.log(typeof Symbol('yz'));//symbol
console.log(typeof /x/g);//object
console.log(typeof null);//object
console.log(typeof [123]);//object
console.log(typeof {name: '123'});//object
console.log(typeof console.log);//function
function f() {
  console.log(typeof arguments);//object
}

f(12, 2, 2,)

//typeof可以检测的数据类型
// 基本数据类型:number/string/undefined/boolean/null检测结果为object
//复杂数据类型为object