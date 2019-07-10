function fn() {
  let n = 1;
  return () => {
    return ++n;
  }
}

let n1 = fn()();
let n2 = fn()();
console.log(n1, n2);//2 2

let f = fn();
let a1 = f();
let a2 = f();
console.log(a1, a2);//2 3//闭包的原因

