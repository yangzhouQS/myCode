const fs = require("fs");

const readHtml = (path, req, res) => {
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) throw err;
    res.write(data);
    res.end();
  });
};

const test = () => {

};

module.exports = {
  readHtml : readHtml,
  test : test
};
