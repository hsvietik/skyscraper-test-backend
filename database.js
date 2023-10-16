const mysql = require("mysql2");

const { MYSQL_PASSWORD } = process.env;

const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: MYSQL_PASSWORD,
  database: "skyscrappers",
  insecureAuth: true,
});

module.exports = connection;
