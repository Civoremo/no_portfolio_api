/** @format */

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("contact")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("contact").insert([
        {
          location: "our current address",
          email: "contact email",
        },
      ]);
    });
};
