function* sum(x) {
  try {
    let y = yield x + 2;
    return y;
  } catch (e) {
    console.log('错误:', e);
  }
}

/*
let g = sum(10);
let sum1 = g.next();
let sum2 = g.next(2);
console.log(sum1);
console.log(sum2);*/

let g = sum(10);
let res = g.next();
console.log(res);
console.log(g.next());

while (!res.done) {
  console.log(res.value);
  res = g.next();
}