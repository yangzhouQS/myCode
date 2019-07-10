const template = require('art-template');
const fs = require('fs');
const http = require('http');
http.createServer((req, res) => {
  let url = req.url;
  console.log(url);
  if (url === '/index') {
    fs.readFile(__dirname + "/tpl.html", (error, data) => {
      if (error) throw error;
      console.log(data.toString());
      let str = template.render(data.toString(), {
        name: 'Jack',
        age: 18,
        province: '北京市',
        hobbies: [
          '写代码',
          '唱歌',
          '打游戏'
        ],
        title: '个人信息'
      });
      res.end(str);
    });
  }
}).listen(3000);