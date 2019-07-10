console.log(a);//=>undefined
var a = 12;
console.log(sum());

function sum() {
  return 'sum';
}

/*
* var声明的变量进行变量的提升,只会声明未定义==>undefined
* function声明的函数在变量提升的阶段,声明和赋值一起完成的
* */