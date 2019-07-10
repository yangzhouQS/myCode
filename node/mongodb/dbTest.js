const { MongodbUtil } = require("./mongodbUtil");
let db = new MongodbUtil("mongodb://127.0.0.1", "27017", "xianjs");
db.connect().then(data => {
  console.log(data);
}).catch(error => {
  console.log(error);
});