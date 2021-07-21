/** @format */

const db = require("../knex");

module.exports = {
  registerProject,
  updateProject,
  deleteProject,
  registerProjectInfo,
  updateProjectInfo,
  deleteProjectInfo,
  registerProjectImage,
  updateProjectImage,
  deleteProjectImage,
};

function registerProject(info) {
  return db("projects").insert(info);
}

function updateProject(info) {
  return db("projects").where({ id: info.id }).update(info);
}

function deleteProject(info) {
  return db("projects").where({ id: info.id }).del();
}

function registerProjectInfo(info) {
  return db("projectInfo").insert(info);
}

function updateProjectInfo(info) {
  return db("projectInfo").where({ id: info.id }).update(info);
}

function deleteProjectInfo(info) {
  return db("projectInfo").where({ id: info.id }).del();
}

function registerProjectImage(info) {
  return db("projectImage").insert(info);
}

function updateProjectImage(info) {
  return db("projectImage").where({ id: info.id }).update(info);
}

function deleteProjectImage(info) {
  return db("projectImage").where({ id: info.id }).del();
}
