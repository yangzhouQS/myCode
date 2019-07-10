let sum = (...args) => args.reduce((prev, next) => prev + next);
// module.exports=sum;
// exports.b = sum;
// module.exports.b = sum;
global.sum = sum;