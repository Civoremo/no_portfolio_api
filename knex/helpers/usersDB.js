/** @format */

const db = require("../knex");

module.exports = {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
};

function registerUser(info) {
  //   console.log("info", info);
  const allUsers = db("users").select();

  return Promise.all([allUsers]).then(users => {
    // console.log("users", users);
    let adminCount = 0;

    for (let user of users[0]) {
      if (user.admin === true) {
        adminCount++;
      }
    }

    if (adminCount < 1 && info.admin === true) {
      return db("users").insert(info).returning("id");
    } else {
      info.admin = false;
      return db("users").insert(info).returning("id");
    }
  });
}

function loginUser(info) {
  const userLogging = db("users").where({ email: info.email }).first();

  return Promise.all([userLogging]).then(user => {
    // console.log("found user", user);
    if (user[0].admin === true) {
      return user[0];
    } else {
      return null;
    }
  });
}

function updateUser(user) {
  return db("users").where({ id: user.id }).update({ admin: user.admin });
}

function deleteUser(user) {
  return db("users").where({ id: user.id }).del();
}
