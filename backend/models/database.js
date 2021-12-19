require("dotenv").config();
const mysql = require("mysql");

module.exports = class DB {
  constructor() {
    this.POOL = mysql.createPool({
      connectionLimit: 10,
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      charset: "utf8mb4",
    });
  }

  // Private Methods
  _runQuery = (query = "", values = []) => {
    return new Promise((resolve, reject) => {
      this.POOL.getConnection((err, connection) => {
        if (err) return reject(err);
        connection.query(query, [...values], (err, results) => {
          connection.release();
          if (err) return reject(err);
          return resolve(results);
        });
      });
    });
  };
};
