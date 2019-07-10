var str = "http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx&e";
str = str.split('?')[1].replace(/=/g, ':')
console.log(str);

