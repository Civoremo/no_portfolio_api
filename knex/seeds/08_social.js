/** @format */

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("socialMedia")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("socialMedia").insert([
        {
          platform_title: "GitHub",
          link: "url to social account",
          contact_id: 1,
        },
        {
          platform_title: "Facebook",
          link: "url to social account",
          contact_id: 1,
        },
        {
          platform_title: "LinkedIn",
          link: "url to social account",
          contact_id: 1,
        },
        {
          platform_title: "Twitter",
          link: "url to social account",
          contact_id: 1,
        },
      ]);
    });
};
