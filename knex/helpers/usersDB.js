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
  const userLogging = db("users").where({ email: info.email }).first();

  return Promise.all([userLogging]).then(user => {
    console.log("found user", user);
    if (user[0].admin) {
      return user[0];
    } else {
      return [];
    }
  });
}
