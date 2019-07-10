let obj = {
  name: "xainjs",
  age: 26
};
for (const objKey in obj) {
  console.log(objKey, obj[objKey]);
}

//for---of无法遍历对象
// @ts-ignore
for (const key of obj) {
  console.log(key);
}