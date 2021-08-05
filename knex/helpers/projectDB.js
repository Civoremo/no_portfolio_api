/** @format */

const db = require("../knex");

module.exports = {
  getMainProjectsInfo,
  getDetailedProjectInfo,
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

function getMainProjectsInfo() {
  return db("projects")
    .orderBy("id")
    .select(
      "id",
      "title",
      "gifImage",
      "description",
      "stack",
      "liveLink",
      "frontendLink",
      "backendLink",
      "featured"
    );
}

function getDetailedProjectInfo(info) {
  const projectDetails = db("projectInfo")
    .where({ project_id: info })
    .select("id", "description", "link");
  const projectImages = db("projectImage")
    .where({ project_id: info })
    .select("id", "image");

  return Promise.all([projectDetails, projectImages]).then(result => {
    let organized = [];

    organized.push(result[0][0]);
    organized.push(result[1]);

    return organized;
  });
}

function registerProject(info) {
  return db("projects").insert(info).returning("id");
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
