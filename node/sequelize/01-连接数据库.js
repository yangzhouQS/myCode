const Sequelize = require("sequelize");

const dbConfig = {
  database : "xianjs",
  username : "root",
  password : "1111",
  host : "127.0.0.1",
  dialect : "mysql", // 'mysql'|'sqlite'|'postgres'|'mssql'
};

const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host : dbConfig.host,
  dialect : dbConfig.dialect,
  operatorsAliases : false,
  // 设置时区
  timezone : "+08:00",
  pool : {
    max : 5,
    min : 0,
    acquire : 30000,
    idle : 10000
  },

  // define: {
  // 全局设置引擎, 默认是 InnoDB
  //     engine: 'MYISAM',
  // SQLite only
  // storage: 'path/to/database.sqlite'
});

// 测试连接是否成功
sequelize.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.log("Unable to connect to the database", err);
  });

module.exports = sequelize;
