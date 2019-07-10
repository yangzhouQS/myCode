const tool = require("./../tool/index.js");

const route = {
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
  }
};

module.exports = route;
