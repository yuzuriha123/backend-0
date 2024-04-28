const mysql = require("mysql2/promise");
//test connecion
const connection = mysql.createPool({
  host: "localhost",
  port: 3307,
  user: "root",
  password: "123456",
  database: "hocapi",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

module.exports = connection;
