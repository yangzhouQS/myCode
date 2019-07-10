// @ts-ignore
let set = new Set([1, 2, 3]);
set.add('abc').add("xainjs").add("圣诞节");
console.log(set);//Set { 1, 2, 3, 'abc', 'xainjs', '圣诞节' }

/*for (const setKey in set) {
  console.log(set[setKey]);
}*/
for (let item of set.values()) {
  console.log(item);
}


