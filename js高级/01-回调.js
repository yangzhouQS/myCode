function f1(fn) {
  setTimeout(fn, 2000)
};

function f2() {
  for (let i = 0; i < 20; i++) {
    console.log("i = ", i);
  }
}

f1(f2)


