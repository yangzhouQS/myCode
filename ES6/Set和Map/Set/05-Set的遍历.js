const set = new Set(["a", "b", "a", "d", "bb"]);
console.log(set.keys());//[Set Iterator] { 'a', 'b', 'd', 'bb' }
console.log(set.values());//[Set Iterator] { 'a', 'b', 'd', 'bb' }
for (const item of set.keys()) {
  console.log(item);
}
console.log("----");
for (const item of set.values()) {
  console.log(item);
}
console.log("----");
//entries 遍历键和值
for (const [v, k] of set.entries()) {
  console.log(v, k);
}
