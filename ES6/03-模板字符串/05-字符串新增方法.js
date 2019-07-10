let s = "我在西安123abc";
// console.log(String.raw({ name : "xxx" }));
console.log(String.raw({ raw : "test" }, 0, 1, 2));
console.log(String.raw`\\\\abcd`);
console.log(String.raw`\\\446465`);


s = "西";
//charAt() 方法从一个字符串中返回指定的字符。
console.log(s.charAt());//西

console.log(s.charCodeAt());//35199
