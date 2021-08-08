/** @format */

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projects").insert([
        {
          title: "First Project",
          description: "Short text explaining our project",
          stack: "Tech we used to build project",
          liveLink: "url address to our live site",
          frontendLink: "url to our frontend code",
          backendLink: "url to our backend code",
          featured: true,
        },
        {
          title: "Second Project",
          description: "Short text explaining our project",
          stack: "Tech we used to build project",
          frontendLink: "url to our frontend code",
          backendLink: "url to our backend code",
        },
        {
          title: "Third Project",
          description: "Short text explaining our project",
          stack: "Tech we used to build project",
          liveLink: "url address to our live site",
          backendLink: "url to our backend code",
        },
        {
          title: "Fourth Project",
          description: "Short text explaining our project",
          stack: "Tech we used to build project",
          liveLink: "url address to our live site",
        },
        {
          title: "Fifth Project",
          description: "Short text explaining our project",
          stack: "Tech we used to build project",
          frontendLink: "url to our frontend code",
          backendLink: "url to our backend code",
        },
      ]);
    });
};
