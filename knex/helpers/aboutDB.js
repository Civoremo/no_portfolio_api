/** @format */

const db = require("../knex");

module.exports = {
  registerAbout,
  updateAbout,
  deleteAbout,
  registerAboutContent,
  updateAboutContent,
  deleteAboutContent,
};

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
