//加法运算的模块
const add = (...arg) => {
  return arg.reduce((prev, next) => {
    return prev + next;
  });
};
module.exports = add;
