const fs = require('fs');
process.stdout.write("请输入需要创建的项目名称#");
process.stdin.on('data', function (e) {
  console.log('用户输入:', e.toString());
});
