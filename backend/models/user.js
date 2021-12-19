const DB = require("./database");

class User extends DB {
  // public Methods
  getAllUsers = async () => {
    const sql = `SELECT * FROM creators;`;
    try {
      const res = await this._runQuery(sql);
      return res;
    } catch (error) {
      throw error;
    }
  };

  getUserByWallet = async (walletAddress = "") => {
    const sql = `SELECT * FROM creators WHERE wallet_addresss = ?;`;
    try {
      const res = await this._runQuery(sql, [walletAddress]);
      return res;
    } catch (error) {
      throw error;
    }
  };

  getUserById = async (userId) => {
    const sql = `SELECT * FROM creators WHERE creatorID = ?;`;
    try {
      const res = await this._runQuery(sql, [userId]);
      return res;
    } catch (err) {
      throw err;
    }
  };

  getUserByEmail = async (email) => {
    const sql = `SELECT * FROM creators WHERE email = ?;`;

    try {
      const res = await this._runQuery(sql, [email]);
      return res;
    } catch (err) {
      throw err;
    }
  };

  insertUser = async (wallet_addresss = "") => {
    const sql = `INSERT INTO creators (wallet_addresss) VALUES ( ? );`;
    const values = [wallet_addresss];

    try {
      const res = await this._runQuery(sql, [values]);
      return res;
    } catch (err) {
      throw err;
    }
  };

  updateUser = async (
    username = "",
    fullname = "",
    email = "",
    bio = "",
    userId
  ) => {
    const sql = `UPDATE creators SET username=?, fullname= ?, email=?,  bio = ? WHERE  creatorID = ?;`;
    const values = [username, fullname, email, bio, userId];

    try {
      const res = await this._runQuery(sql, values);
      return res;
    } catch (error) {
      throw error;
    }
  };

  updateUserPassword = async (password = "", userId = "") => {
    const sql = `UPDATE creators SET password=? WHERE creatorID = ?;`;
    const values = [password, userId];
    try {
      const res = await this._runQuery(sql, values);
      return res;
    } catch (error) {
      throw error;
    }
  };

  updateUsername = async (username = "", userId = "") => {
    const sql = `UPDATE creators SET username=? WHERE creatorID = ?;`;
    const values = [username, userId];
    try {
      const res = await this._runQuery(sql, values);
      return res;
    } catch (error) {
      throw error;
    }
  };

  deleteUser = async (userId = "") => {
    const sql = `DELETE FROM users WHERE creatorID= ?`;
    try {
      const res = await this._runQuery(sql, userId);
      return res;
    } catch (error) {
      throw error;
    }
  };
}

module.exports.User = User;
