const url = require("url");
const querystring = require("querystring");
const tool = require("./../tool/index.js");

const route = {
  //路由 , get请求返回对呀的页面
  home : (req, res) => {
    tool.readHtml("./views/home.html", req, res);
  },
  kind : (req, res) => {
    tool.readHtml("./views/kind.html", req, res);
  },
  cart : (req, res) => {
    tool.readHtml("./views/cart.html", req, res);
  },
  login : (req, res) => {
    tool.readHtml("./views/login.html", req, res);
  },
  register : (req, res) => {
    tool.readHtml("./views/register.html", req, res);
  },
  page404 : (req, res) => {
    tool.readHtml("./views/404.html", req, res);
  },
  registerAction : (req, res) => {
    // const { username, password } = url.parse(req.url, true).query;
    const username = url.parse(req.url, true).query.username;
    const password = url.parse(req.url, true).query.password;
    res.write(`用户名为:${username}`);
    res.write(`密码为:${password}`);
    /**
     * 与数据库做比对，如果有该用户名，提示用户该用户已注册，请直接登录
     * 如果没有该用户，可以执行注册
     */
    res.end();
  },
  //处理POST请求的表单数据
  loginAction : (req, res) => {
    let str = "";
    req.on("data", (val) => { // 接收数据，接收过程中累加
      str += val;
    });

    req.on("end", () => {
      //请求的&拼接的字符串转换为对象
      res.write(JSON.stringify(querystring.parse(str)));
      console.log(querystring.parse(str));//{ username: 'cdssdcsdc', password: 'scdcdssdc' }
      res.end();
    });
    //错误处理
    req.on("error", (err) => {
      res.write(err);
      res.end();
    });

  }
};

module.exports = route;
