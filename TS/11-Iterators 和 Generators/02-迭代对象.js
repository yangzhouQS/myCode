var obj = {
    name: "xainjs",
    age: 26
};
for (var objKey in obj) {
    console.log(objKey, obj[objKey]);
}
//for---of无法遍历对象
// @ts-ignore
for (var _i = 0, obj_1 = obj; _i < obj_1.length; _i++) {
    var key = obj_1[_i];
    console.log(key);
}
