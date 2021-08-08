/** @format */

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("about")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("about").insert([
        {
          title: "ABOUT",
        },
        {
          title: "STACK",
        },
      ]);
    });
};
