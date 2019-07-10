let arr = [1, 2, 3, 456, false];
//for...of
for (const item of arr) {
  console.log(item);
}
//for....in
for (const arrKey in arr) {
  console.log(arrKey, arr[arrKey]);
}