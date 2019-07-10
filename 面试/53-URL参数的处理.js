let url = 'https://www.baidu.com/?wd=php&age=23&time=15.6';
//字符串处理
let queryURLParamter = url => {
  let obj = {};
  if (url.toString().indexOf('?') < 0) {
    return obj;
  }
  let ary = url.split('?')[1].split('&');
  //[ 'wd=php', 'age=23', 'time=15.6' ]
  for (let i = 0, len = ary.length; i < len; i++) {
    let cur = ary[i].split('=');
    obj[cur[0]] = cur[1];
  }
  return obj;
};
/*
fromCharCode: ƒ fromCharCode()
fromCodePoint: ƒ fromCodePoint()
length: 1
name: "String"
prototype: String
encodeHTML: ƒ ()
anchor: ƒ anchor()
big: ƒ big()
blink: ƒ blink()
bold: ƒ bold()
charAt: ƒ charAt()
charCodeAt: ƒ charCodeAt()
codePointAt: ƒ codePointAt()
concat: ƒ concat()
constructor: ƒ String()
endsWith: ƒ endsWith()
fixed: ƒ fixed()
fontcolor: ƒ fontcolor()
fontsize: ƒ fontsize()
includes: ƒ includes()
indexOf: ƒ indexOf()
italics: ƒ italics()
lastIndexOf: ƒ lastIndexOf()
length: 0
link: ƒ link()
localeCompare: ƒ localeCompare()
match: ƒ match()
normalize: ƒ normalize()
padEnd: ƒ padEnd()
padStart: ƒ padStart()
repeat: ƒ repeat()
replace: ƒ replace()
search: ƒ search()
slice: ƒ slice()
small: ƒ small()
split: ƒ split()
startsWith: ƒ startsWith()
strike: ƒ strike()
sub: ƒ sub()
substr: ƒ substr()
substring: ƒ substring()
sup: ƒ sup()
toLocaleLowerCase: ƒ toLocaleLowerCase()
toLocaleUpperCase: ƒ toLocaleUpperCase()
toLowerCase: ƒ toLowerCase()
toString: ƒ toString()
toUpperCase: ƒ toUpperCase()
trim: ƒ trim()
trimEnd: ƒ trimEnd()
trimLeft: ƒ trimStart()
trimRight: ƒ trimEnd()
trimStart: ƒ trimStart()
valueOf: ƒ valueOf()
*/
//正则的处理
let queryURLParamter2 = function (url) {
  let reg = /([^&?=]+)=([^&?=]+)/g;
  let obj = {};
  url.replace(reg, function (...val) {
    obj[val[1]] = val[2];
  });
  return obj;
};
console.log(queryURLParamter2(url));
//{ wd: 'php', age: '23', time: '15.6' }
