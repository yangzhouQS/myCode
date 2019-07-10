//指定形参的类型
function gentter(person) {
    return "Hello, " + person;
}
// @ts-ignore
let user = "Tom";
console.log(gentter(user));
