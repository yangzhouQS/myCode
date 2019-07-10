/*
这是一行数据
这是第二行数据
 */
process.stdout.write('这是一行数据\n这是第二行数据');

//输出一行标准错误流，效果跟stdout没差[Finished in 0.2s]
process.stderr.write('输出一行标准错误流，效果跟stdout没差 \n');

console.log("\r");
process.stdin.resume();
var a, b;
process.stdout.write('请输入a的值: ');
process.stdin.on('data', function (data) {
  if (a == undefined) {
    a = Number(data);
    process.stdout.write('请输入b的值: ');
  } else {
    b = Number(data);
    process.stdout.write('结果是: ' + (a + b));
    process.exit();
  }
})