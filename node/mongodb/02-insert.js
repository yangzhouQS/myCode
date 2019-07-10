const { MongoClient } = require("mongodb");
const dbUrl = "mongodb://127.0.0.1:27017";
MongoClient.connect(dbUrl, (err, client) => {
  if (err) throw err;
  //1. 获取连接池对象
  const db = client.db("xianjs");//获取连接池对象
  //2.选择操作的集合
  const collection = db.collection("user");
  //3.插入数据
  collection.insert([{ name : "安东尼", age : 34, like : "篮球" }, { name : "阿泰斯特", age : 37 }], err => {
    if (err) throw err;
    console.log("insert 200");
  });
});