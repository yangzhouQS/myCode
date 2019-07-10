//指定形参的类型
function gentter(person: string) {
    return "Hello, " + person;
}

// @ts-ignore
let user: string = "Tom";
console.log(gentter(user));