//es6的模板字符串替换字符串的拼接麻烦
// @ts-ignore
var user = "xainjs";
// @ts-ignore
var age = 9;
var str = "name = " + user + ", age = " + age;
console.log("" + str); //name = xainjs, age = 9
var data = ['xianjs', '产品', '研发', '关于'];
var ulInner = '';
for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
    var k = data_1[_i];
    ulInner += "<li>" + k + "</li>";
}
console.log("<ul>" + ulInner + "</ul>");
//<ul><li>xianjs</li><li>产品</li><li>研发</li><li>关于</li></ul>
str = "http://www.xianjs.met";
// @ts-ignore
console.log(str.includes("xian"));
