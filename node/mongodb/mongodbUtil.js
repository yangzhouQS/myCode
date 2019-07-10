const { MongoClient } = require("mongodb");
const dbUrl = "mongodb://127.0.0.1:27017";

class MongodbUtil {
  constructor(host, port, dbName) {
    this.host = host;
    this.port = port;
    this.dbName = dbName;
    this.client = null;
    this.dbObj = null;
    this.collection = null;
  }

  connect() {
    return new Promise((resolve, reject) => {
      MongoClient.connect(`${this.host}:${this.port}`, (error, client) => {
        if (error) {
          reject(error);
        } else {
          this.client = client;
          resolve("ok");
        }
      });
    });

  }
}

module.exports = {
  MongodbUtil
};
// let connection = null;
MongoClient.connect(dbUrl, (err, client) => {
  if (err) throw err;
  //1. 获取连接池对象
  const db = client.db("xianjs");//获取连接池对象
  //2.选择操作的集合
  const collection = db.collection("user");
  //3.删除数据
  /*collection.remove({ name : "xxx" }, error => {
    if (error) throw error;
    console.log("删除 成功");
    client.close();
  });*/
});

