var arr = [1, 2, 3, 456, false];
//for...of
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var item = arr_1[_i];
    console.log(item);
}
//for....in
for (var arrKey in arr) {
    console.log(arrKey, arr[arrKey]);
}
