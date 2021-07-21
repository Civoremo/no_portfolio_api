/** @format */

const db = require("../knex");

module.exports = {
  getAbout,
  registerAbout,
  updateAbout,
  deleteAbout,
  registerAboutContent,
  updateAboutContent,
  deleteAboutContent,
};

function getAbout() {
  const about = db("about").select("id", "title");
  const content = db("aboutContent").select("id", "textContent", "about_id");

  return Promise.all([about, content]).then(result => {
    console.log("get about", result);
    let organized = [];
  });
}

function registerAbout(info) {
  return db("about").insert(info);
}

function updateAbout(info) {
  return db("about").where({ id: info.id }).update(info);
}

function deleteAbout(info) {
  return db("about").where({ id: info.id }).del().returning("id");
}

function registerAboutContent(info) {
  return db("aboutContent").insert(info);
}

function updateAboutContent(info) {
  return db("aboutContent").where({ id: info.id }).update(info);
}

function deleteAboutContent(info) {
  return db("aboutContent").where({ id: info.id }).del().returning("id");
}
