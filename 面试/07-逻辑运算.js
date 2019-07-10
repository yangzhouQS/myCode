console.log(10 && 0);//0
console.log(10 || 0);//10
console.log('array' || 0);//'array'
console.log(0 && 1);

//判断一个变量会被当做true还是false
var a = '';
console.log(!!a);//false
console.log(!![]);//true
console.log(!!{});//true
console.log(!!NaN);//false
console.log(!!Infinity);//true
console.log(!!undefined);//false