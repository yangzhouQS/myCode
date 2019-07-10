let arr = [];
console.log(arr instanceof Array);//true
console.log(Object.prototype.toString.call(arr) === '[object Array]');//true
console.log(typeof arr);//object

