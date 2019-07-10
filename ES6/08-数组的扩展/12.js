let data = [
  "We are glad to see you here. This site is dedicated to",
  "poetry and to the people who make poetry possible",
  "poets and their readers. FamousPoetsAndPoems.com is",
  "a free poetry site. On our site you can find a large",
  "collection of poems and quotes from over 631 poets",
  "Read and Enjoy Poetry",
  "I, too, sing America",
  "I am the darker brother",
  "They send me to eat in the kitchen",
  "When company comes",
  "But I laugh",
  "And eat well",
  "And grow strong",
  "Tomorrow",
  "Ill be at the table",
  "When company comes",
  "Nobodyll dare",
  "Say to me",
  "Eat in the kitchen",
  "Then",
  "Besides",
  "Theyll see how beautiful I am",
  "And be ashamed",
  "I, too, am America",
  "a a a a a a a a a"
];

//console.log(data.map(x => x.split(' ')));
/*data.map(x => {
  console.log(...x.split(' '))
});*/
let str = data.map(x => {
  //console.log(...x.split(' '));
  return x.split(' ');
});
// data.map(x=>x.split(' ')).length;//24
let a = [...data.map(x => x.split(' '))];
let obj = {};
for (let i = 0; i < a.length; i++) {
  // console.log(i, a[i]);
  a[i].forEach(x => {
    if (obj[x]) {
      obj[x]++;
    } else {
      obj[x] = 1;
    }
  });
}
console.log(JSON.stringify(obj));