/** @format */

const db = require("../knex");

module.exports = {
  registerContact,
  updateContact,
  deleteContact,
  registerSocial,
  updateSocial,
  deleteSocial,
};

function registerContact(info) {
  return db("contact").insert(info);
}

function updateContact(info) {
  return db("contact").where({ id: info.id }).update(info);
}

function deleteContact(info) {
  return db("contact").where({ id: info.id }).del();
}

function registerSocial(info) {
  return db("socialMedia").insert(info);
}

function updateSocial(info) {
  return db("socialMedia").where({ id: info.id }).update(info);
}

function deleteSocial(info) {
  return db("socialMedia").where({ id: info.id }).del();
}
