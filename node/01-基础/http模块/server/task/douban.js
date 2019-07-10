const https = require("https");

const options = {
  hostname : "api.douban.com",
  port : 443, // 如果是http协议则为80
  path : "/v2/movie/top250",
  method : "GET"
};

const req_data = https.request(options, (res_data) => {
  let str = "";

  res_data.on("data", (val) => {
    str += val;
  });

  res_data.on("end", () => {
    console.log(str);
  });

  res_data.on("error", (err) => {
    console.log(err);
  });
});

req_data.on("error", (err) => {
  console.log(err);
});

req_data.end();
