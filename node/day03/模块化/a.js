// var exports=module.exports;
//在nodejs的每个文件开始时默认好像是这样的吧
exports.a = 234;
exports = {};//exports对象引用指向别处
exports.b = 456;

module.exports = {
  c: "789"
}
exports = {//再次修改了引用,已经找不到module.exports的引用啦.....
  name: '李四'
}
module.exports = {
  name: 'tom',
  age: 26,
  exports
}
exports.cba = '篮球联赛'
console.log(456);

//return module.exports;//最后默认导出的是这样的
/*
* exports:不可以直接导出对象
*/