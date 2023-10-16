const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const logger = require("morgan");
const cors = require("cors");
const connection = require("./database");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
const { PORT } = process.env;
app.get("/", (req, res) => {
  let sql = "SELECT * FROM SKYSCRAPER";
  connection.query(sql, (results, err) => {
    if (err) throw err;
    console.log(results);
    res.send(results);
  });
});

app.listen(PORT, () => {
  console.log("Server running. Use our API on port: 3000");
  connection.connect((err) => {
    if (err) throw err;
    console.log("Database connection successful");
  });
});
