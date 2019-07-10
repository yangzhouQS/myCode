var fullname = 'language';
var obj = {
  fullname: 'javascript',
  prop: {
    getFullName: function () {
      return this.fullName;
    }
  }
};
console.log(obj.prop.getFullName());//undefined
//this =>obj.prop 中没有fullName
var f = obj.prop.getFullName;
console.log(f());//this=>window
