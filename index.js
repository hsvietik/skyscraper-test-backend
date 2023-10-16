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
const PORT = process.env.PORT || 3001;
app.get("/skyscraper", (req, res) => {
  let sql = "SELECT * FROM SKYSCRAPER";
  connection.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: "Database error" });
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log("Server running. Use our API on port: 3001");
  connection.connect((err) => {
    if (err) console.log(err);
    console.log("Database connection successful");
  });
});
