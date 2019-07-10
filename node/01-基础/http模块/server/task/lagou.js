const https = require("https");
const cheerio = require("cheerio");

const url = "https://www.lagou.com/";

function filterData(html) {
  const $ = cheerio.load(html); // 拿到类似于jquery中的$
  // console.log($)
  const menu_mains = $(".menu_main");
  console.log(menu_mains.length);
  // 遍历数据
  let arr = [];
  menu_mains.map((index, item) => {
    console.log(index);
    let h2_content = $(item).find("h2").text().trim();
    let as = $(item).find("a");
    let list = [];
    as.map((idx, itm) => {
      let a_content = $(itm).text().trim();
      list.push(a_content);
    });
    arr.push({
      title : h2_content,
      list : list
    });
  });
  console.log(arr);
  // 一系列的后续操作
}

https.get(url, (res) => {
  let str = "";

  res.on("data", (val) => {
    str += val;
  });

  res.on("end", () => {
    // console.log(str);
    // 过滤数据
    filterData(str);
  });

  res.on("error", (err) => {
    console.log(err);
  });
});