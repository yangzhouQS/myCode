function faico(n) {
  if (n <= 1) {
    return 1;
  }
  return n * arguments.callee(n - 1);
}

console.log(faico(100));


