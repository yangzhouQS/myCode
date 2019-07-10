//导出模块
/*
module.exports = exports
 */
exports.func = function (a, b) {
  return a + b;
}


// exports.a = "a模块的数据";
//覆盖前面导出的函数变量
/*module.exports = {
  b: 'b变量'
}*/
/*
{
  module.id:当前模块的id,是文件的路径
  module.filename:当前模块的文件名称
  module.parent:当前模块的父集模块
}
*/
// console.log(module.id);
// console.log(module.filename);
// console.log(module.parent);
