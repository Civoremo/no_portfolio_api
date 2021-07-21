/** @format */

const db = require("../knex");

module.exports = {
  getContact,
  registerContact,
  updateContact,
  deleteContact,
  registerSocial,
  updateSocial,
  deleteSocial,
};

function getContact() {
  const contact = db("contact").select("id", "location", "email");
  const social = db("socialMedia").select(
    "id",
    "platform_title",
    "image",
    "link",
    "contact_id"
  );

  return Promise.all([contact, social]).then(result => {
    let organized = [];

    for (let socialMedia of result[1]) {
      if (socialMedia.contact_id === result[0][0].id) {
        organized.push(socialMedia);
      }
    }

    return [result[0][0], organized];
  });
}

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
