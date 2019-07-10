var arr = [1, 2, 3];
arr[10] = 100;
console.log(arr);


function fn(arg) {
  arg[0] = arg[2];
}

function test(a, b, c) {
  c = 10;
  fn(arguments);
  console.log(a + b + c);
}

test(1, 1, 1);
