var co = require('co');
var wrapper = require('co-redis');
var redis = require('redis'),
  RDS_PORT = 6379,                //端口号
  RDS_HOST = '127.0.0.1',    //服务器IP  要连接的A服务器redis
  RDS_PWD = '1111',     //密码
  RDS_OPTS = {},                  //设置项
  client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS);
client.auth(RDS_PWD, function () {
  console.log('通过认证');
});
//错误监听？
client.on("error", function (err) {
  console.log("Error " + err);
});
// 数据库选择
/*
 * redis默认连接数据库0,可以利用select选择指定数据库0~15
 * 使用示例：
 */
client.select("2", function (err) {
  if (err) {
    console.log(err);
  } else {
    //console.log("数据库选择成功啦....222");
  }
});

var redisCo = wrapper(client);

// 利用co-redis包装将redis命令以返回值形式直接输出
/*co(function* () {
  var set = yield redisCo.set('test', 33);
  console.log(set);
  console.log(yield redisCo.get('test')); // logs 33

  client.quit();
}).catch(function (e) {
  console.log(e);
});*/

//redis命令的基本使用
// client.set('key', 'value', function (res, reply) {});
let a = Math.random() * (10) + 5;

function getRandom(min, max) {
  // let cur = parseInt(Math.random() * (max - min + 1) + min);
  return parseInt(Math.random() * (max - min + 1) + min);
}

// console.log((getRandom(10, 99)).toString() + ((new Date()).getTime()).toString());
let k = (getRandom(0, 10000)).toString().padStart(5, '0') + ((new Date()).getTime()).toString();
console.log(k);
console.time("timed");
/*for (let i = 0; i < 1000000; i++) {
  let k = (getRandom(10, 99)).toString().padStart(5, '0') + ((new Date()).getTime()).toString();
  client.set(k, k.repeat(50), (err, res) => {
    if (err) {
      //console.log("操作失败", err);
    } else {
      // console.log("成功啦", res);
    }
  });
}*/
console.timeEnd("timed");
console.log("成功啦");

/*两种都可以断掉与redis的连接，
end()很粗暴，不管3721，一下子退出来了，上面那句获取哈希表"hash key"的某个元素值的表达式将没有结果返回
而quit()则是先将语句处理完毕再干净地退出，斯文得很
*/
//client.end();
client.quit();
