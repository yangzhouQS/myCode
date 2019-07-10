/**
 * tap函数接受参数,返回另外的函数
 * @param value
 * @returns {Function}
 */
const tap = (value) => {
  return (fn) => {
    typeof fn === 'function' && fn(value);
    // console.log(value);
  };
};

tap('fun', (it) => {
  console.log("value is ", it);
})();

function forEach(arg, fn) {
  let index = 0;
  for (const cur of arg) {
    fn(index++, cur, arg);
  }
}

forEach([1, 2, 3, 4], (index, value) => {
  tap(value)(() => {
    console.log(value);
  });
  // console.log(value);
});


