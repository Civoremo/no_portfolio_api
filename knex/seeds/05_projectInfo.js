/** @format */

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projectInfo")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projectInfo").insert([
        {
          description: "FIRST, Long form description of our project",
          link: "addition link to showcase out project",
          project_id: 1,
        },
        {
          description: "SECOND, Long form description of our project",
          project_id: 2,
        },
        {
          description: "THIRD, Long form description of our project",
          link: "addition link to showcase out project",
          project_id: 3,
        },
        {
          description: "FOURTH, Long form description of our project",
          link: "addition link to showcase out project",
          project_id: 4,
        },
        {
          description: "FIFTH, Long form description of our project",
          project_id: 5,
        },
      ]);
    });
};
