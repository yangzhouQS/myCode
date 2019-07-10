// @ts-ignore
function foo() {
  // @ts-ignore
  return new Promise((reslove, reject) => {
    if (Math.random() > 0.5) {
      reslove("成功吧~~~")
    } else {
      reject("失败吧~~~")
    }
  })
}

// @ts-ignore
foo().then(data => console.log(data))
  .then(data => console.log(data));