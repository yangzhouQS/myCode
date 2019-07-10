var redis = require('redis'),
  RDS_PORT = 6379,
  RDS_HOST = '127.0.0.1',
  RDS_PWD = '1111',
  RDS_OPTS = {auth_pass: RDS_PWD},
  client = redis.createClient(RDS_PORT, RDS_HOST, RDS_OPTS);
client.auth(RDS_PWD, function () {
  console.log('通过认证');
});
client.select(1, function () {
  console.log("选择数据库成功..");
});
// console.log(client.address);//127.0.0.1:6379
// console.log(client.connection_options);//{ port: 6379, host: '127.0.0.1', family: 4 }
// console.log(client.options);//读取配置

//1 - 单值set和get
client.on('connect', function () {
  /*client.set('name', 'lisi', function () {
    console.log('存储成功啦..');
  });*/
  client.get('name', redis.print);//Reply: lisi
});



