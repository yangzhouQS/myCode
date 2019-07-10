const fs = require('fs');
const http = require('http');
const path = require('path');
const template = require('art-template');
const url = require('url');
//假数据
var comments = [
  {
    name: '张三',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三2',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三3',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三4',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三5',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  }
];
http.createServer((req, res) => {
  /*
  * 对于表单提交的路径处理可以使用url模块进行判断,获取请求的参数地址/数据
  * 使用 url.parse 方法将路径解析为一个方便操作的对象，
  * 第二个参数为 true 表示直接将查询字符串转为一个对象（通过 query 属性来访问）
  * */
  let parseObj = url.parse(req.url, true);
  console.log(parseObj);
  let parseName = parseObj.pathname.toLowerCase();

  console.log(parseName);
  // /index首页
  if (parseName === '/' || parseName === '/index' || parseName === '/index.html') {
    fs.readFile(__dirname + "/views/index.html", (error, data) => {
      if (error) throw error;
      let htmlSrt = template.render(data.toString(), {
        comments: comments
      })
      res.end(htmlSrt);
    });
    //  /post添加数据
  } else if (parseName === '/post') {
    fs.readFile(__dirname + "/views/post.html", (error, data) => {
      if (error) throw error;
      res.end(data.toString());
    });
    //静态文件的处理
  } else if (parseName === '/pinglun') {
    res.setHeader("content-type", "text/html;charset=utf-8");
    console.log(parseObj['query']['name']);
    console.log(parseObj['query']['message']);
    let name = parseObj['query']['name'];
    let message = parseObj['query']['message'];
    let dateTime = (new Date()).getTime();
    comments.unshift({name: name, message: message, dateTime: new Date()})
    res.end("<a href='/'>查看你的留言</a>")
  } else if (parseName.indexOf('/public/') === 0) {
    fs.readFile(path.normalize(__dirname + '/' + parseName), (error, data) => {
      if (error) throw error;
      res.end(data);
    });
  } else {//错误页面的处理
    res.end("404 Not Found");
  }
}).listen(3000);
console.log('http://127.0.0.1:3000');