let arr = [1, 2, 3, 4, 4, 5];
let result = [];
//命令式
for (let i = 0, len = arr.length; i < len; i++) {
  if (arr[i] % 2 === 0) {
    result.push(arr[i]);
  }
}
console.log(result);
//声明式
result = arr.filter(x => x % 2 === 0);
console.log(result);

