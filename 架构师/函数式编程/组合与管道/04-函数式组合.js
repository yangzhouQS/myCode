let map = (arr, fn, context) => {
  let res = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    res.push(fn(arr[i], i, arr, context));
  }
  return res;
};

let filter = (arr, callback, context = this) => {
  let res = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    callback(arr[i]) ? res.push(arr[i]) : null;
  }
  return res;
};

let apressBooks = [
  {
    'id': 111,
    'title': 'JAVA编程思想',
    'author': '李四',
    'rating': [4.5],
    'reviews': [{good: 4, excellent: 12}]
  }, {
    'id': 222,
    'title': '大数据分析',
    'author': '大牛',
    'rating': [6.8],
    'reviews': [{good: 6, excellent: 3}]
  }, {
    'id': 333,
    'title': 'Python人工智能',
    'author': '李二狗',
    'rating': [8.6],
    'reviews': [{good: 3, excellent: 6}]
  }, {
    'id': 444,
    'title': 'Linux云计算',
    'author': '太后',
    'rating': [3.6],
    'reviews': [{good: 23, excellent: 12}]
  }
];
//需求:获取rating评级高于4.5的并且包含字段title和author
// console.log(filter(apressBooks, (book) => book.rating[0] > 4.5))
//filter的输出作为map的输入
let res = map(filter(apressBooks, (book) => book.rating[0] > 4), (book) => {
  return {'title': book.title, 'author': book.author};
});
console.log(res);
