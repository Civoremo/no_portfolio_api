/** @format */

const db = require("../knex");

module.exports = {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
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

function updateUser(user) {
  return db("users").where({ id: user.id }).update({ admin: user.admin });
}

function deleteUser(user) {
  return db("user").where({ id: user.id }).del();
}
