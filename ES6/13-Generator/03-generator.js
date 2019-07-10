function* show(a, b) {
  console.log("start", a, b);
  let c = yield;//传值
  console.log("c = ", c);
  yield "B";
  return "done";
}

let fn = show(1, 2);
fn.next();
console.log(fn.next(888));
console.log(fn.next());
