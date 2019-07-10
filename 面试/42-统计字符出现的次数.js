let str = 'aaaabbbccccddfgh';
let obj = {};
/*for (let i = 0; i < str.length; i++) {
  let v = str.charAt(i);
  if (obj[v] & obj[v].value == v) {
    obj[v].count = ++obj[v].count;
  } else {
    obj[v] = {};
    obj[v].count = 1;
    obj[v].value = v;
  }
}
for (let key in obj) {
  // document.write(); // a=4  b=3  c=4  d=2  f=1  g=1  h=1
  console.log(obj[key].value + '=' + obj[key].count + ' ');
}*/

str = str.split('');
str.forEach(x => {
  if (obj[x]) {
    obj[x] += 1;
  } else {
    obj[x] = 1;
  }
});
console.log(obj);