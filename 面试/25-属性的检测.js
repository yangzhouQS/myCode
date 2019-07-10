//属性的检测:in运算符
let obj = {
  name: '李四', age: 26, getName: function () {
    console.log(this.name);
  }
};

console.log('age' in obj);
console.log('getName' in obj);
console.log('a' in obj);
/*hasOwnProperty:属性的检测*/
console.log(obj.hasOwnProperty('name'));//true
console.log(obj.hasOwnProperty('sex'));//false

