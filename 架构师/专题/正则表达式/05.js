var color = "#990000";
/#(\d+)/.test(color);
console.log(RegExp.$1);//990000

var num = "1234 5678";
var newNum = num.replace(/(\d{4}) (\d{4})/, "$2 $1");
console.log(newNum);//5678 1234