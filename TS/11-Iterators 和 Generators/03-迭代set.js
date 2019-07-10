// @ts-ignore
var set = new Set([1, 2, 3]);
set.add('abc').add("xainjs").add("圣诞节");
console.log(set); //Set { 1, 2, 3, 'abc', 'xainjs', '圣诞节' }
/*for (const setKey in set) {
  console.log(set[setKey]);
}*/
for (var _i = 0, _a = set.values(); _i < _a.length; _i++) {
    var item = _a[_i];
    console.log(item);
}
