const http = require("http");
const url = require("url");
const queryString = require("querystring");
const route = {
  home : (req, res) => {
    let str = "";

    req.on("data", (val) => { // 接收数据，接收过程中累加
      str += val;
    });

    req.on("end", () => {//接受数据完成
      res.write(str);
      res.write("HOME");
      res.end();
    });

    req.on("error", (err) => {//接受数据出错
      res.write(err);
      res.end();
    });
    res.write(err);
  },
  kind : (req, res) => {
    res.write("分类");
  },
  page404 : (req, res) => {
    res.write("404");
  }
};
const server = http.createServer((req, res) => {
  if (req.url !== "/favicon.ico") {
    res.writeHead(200, { "Content-Type" : "text/html;charset=utf-8" });
    let { pathname } = url.parse(req.url); // es6中的解构赋值
    pathname = pathname.split("/")[1]; // 去掉/
    try { // 只要条件满足就执try语句
      route[pathname](req, res);
    } catch ( e ) {
      //TODO handle the exception
      route["page404"](req, res);
    }
    res.end();
  }
});
server.listen(3000);
console.log("http://localhost:3000");