//生成器

// @ts-ignore
function* foo() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  return 5;
}

let f = new foo();
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
console.log(f.next());
