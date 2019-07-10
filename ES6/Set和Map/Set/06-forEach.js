const set = new Set(["a", "b", "a", "d", "bb"]);
set.forEach((item, index, cur) => {
  console.log(item, index, cur);
});
/*
a a Set { 'a', 'b', 'd', 'bb' }
b b Set { 'a', 'b', 'd', 'bb' }
d d Set { 'a', 'b', 'd', 'bb' }
bb bb Set { 'a', 'b', 'd', 'bb' }*/
