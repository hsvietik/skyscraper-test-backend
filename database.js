const mysql = require("mysql2");

const { MYSQL_PASSWORD } = process.env;

// const connection = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "root",
//   password: MYSQL_PASSWORD,
//   database: "skyscrappers",
//   port: 3306,
// });

// module.exports = connection;

const connection = mysql.createPool({
  host: "127.0.0.1",
  user: "root",
  password: MYSQL_PASSWORD,
  database: "skyscrappers",
  port: 3306,
  connectionLimit: 10, // Adjust as needed
});

module.exports = connection;
