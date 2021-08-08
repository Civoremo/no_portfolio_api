/** @format */

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("aboutContent")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("aboutContent").insert([
        {
          textContent: "Some random text can go here",
          about_id: 1,
        },
        {
          textContent:
            "Additional random text which can be linked with the previous",
          about_id: 1,
        },
        {
          textContent: "HTML",
          about_id: 2,
        },
        {
          textContent: "CSS",
          about_id: 2,
        },
        {
          textContent: "GIT",
          about_id: 2,
        },
        {
          textContent: "REACT",
          about_id: 2,
        },
        {
          textContent: "SQL",
          about_id: 2,
        },
        {
          textContent: "REDUX",
          about_id: 2,
        },
      ]);
    });
};
