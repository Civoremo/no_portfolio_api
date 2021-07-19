/** @format */

const db = require("../knex");

module.exports = {
  registerUser,
  loginUser,
};

function registerUser(info) {
  return db("users").insert(info);
}

function loginUser(info) {
  return db("users").where({ email: info.email }).first();
}
