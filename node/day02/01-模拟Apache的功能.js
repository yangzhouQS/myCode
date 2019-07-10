const fs = require('fs');
const http = require('http');
const path = require('path');
http.createServer((req, res) => {
  res.setHeader("content-type", "text/html;charset=utf-8");
  let url = req.url.toLowerCase();
  if (url === '/' || url === "/index" || url === '/index.html' || url === '/index.php') {
    res.end("<h1>你访问的是首页内容</h1>");
  }
  else {
    fs.writeFile(__dirname + "index.txt", "", err => {
      if (err) throw err;
      console.log("文件初始化完成");
    });
    fs.readdir(__dirname, (err, files) => {
      files.forEach(x => {
        // console.log(path.normalize(__dirname + `/${x}`));
        let filePath = path.normalize(__dirname + `/${x}`);
        fs.stat(filePath, (err, stats) => {
          if (err) throw err;
          if (stats.isFile()) {
            fs.appendFile(__dirname + "/index.txt", `<li>- ${x} : 是文件</li>`, err => {
              if (err) throw err;
              // console.log(x, "文件追加成功");
            })
          } else if (stats.isDirectory()) {
            fs.appendFile(__dirname + "/index.txt", `<li>+ ${x} : 是目录</li>`, err => {
              if (err) throw err;
              // console.log(x, '目录追加成功..');
            })
          }
        });
      })
    });

    fs.readFile(__dirname + "/index.txt", (err, data) => {
      if (err) throw err;
      let html = `
      <!doctype html>
      <html lang="zh_CN"> <head> <meta charset="UTF-8"> <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"> <meta http-equiv="X-UA-Compatible" content="ie=edge"> <title>Apache</title> <style> li { list-style: none; line-height: 36px; } </style> </head>
      <body>
      <ul>
        ${data.toString()}
      </ul> </body> </html>`;
      res.end(html);
    })
  }
}).listen(3000)
// art-template
// art-template 不仅可以在浏览器使用，也可以在 node 中使用
//
// 安装：
//    npm install art-template
//    该命令在哪执行就会把包下载到哪里。默认会下载到 node_modules 目录中
//    node_modules 不要改，也不支持改。
//
// 在 Node 中使用 art-template 模板引擎
// 模板引起最早就是诞生于服务器领域，后来才发展到了前端。
//
// 1. 安装 npm install art-template
// 2. 在需要使用的文件模块中加载 art-template
//    只需要使用 require 方法加载就可以了：require('art-template')
//    参数中的 art-template 就是你下载的包的名字
//    也就是说你 isntall 的名字是什么，则你 require 中的就是什么
// 3. 查文档，使用模板引擎的 API