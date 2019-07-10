let obj = {
  name: "李四",
  age: 26,
  sex: '男',
  say: function () {
    console.log(this.name, this.age, this.sex);
  },
  frides: [1, 2, 3, 4]
};
let o2 = {
  name: "Tom"
};
for (const objKey in obj) {
  if (!o2[objKey]) {
    o2[objKey] = obj[objKey];
  }
}
console.log(o2);




