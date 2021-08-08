/** @format */

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("projectImage")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("projectImage").insert([
        {
          image:
            "https://res.cloudinary.com/civoremo/image/upload/v1626818071/web_portfolio/portfolio_default.png",
          project_id: 1,
        },
        {
          image:
            "https://res.cloudinary.com/civoremo/image/upload/v1626818071/web_portfolio/portfolio_default.png",
          project_id: 1,
        },
        {
          image:
            "https://res.cloudinary.com/civoremo/image/upload/v1626818071/web_portfolio/portfolio_default.png",
          project_id: 1,
        },

        {
          image:
            "https://res.cloudinary.com/civoremo/image/upload/v1626818071/web_portfolio/portfolio_default.png",
          project_id: 2,
        },
        {
          image:
            "https://res.cloudinary.com/civoremo/image/upload/v1626818071/web_portfolio/portfolio_default.png",
          project_id: 2,
        },

        {
          image:
            "https://res.cloudinary.com/civoremo/image/upload/v1626818071/web_portfolio/portfolio_default.png",
          project_id: 3,
        },
        {
          image:
            "https://res.cloudinary.com/civoremo/image/upload/v1626818071/web_portfolio/portfolio_default.png",
          project_id: 3,
        },
        {
          image:
            "https://res.cloudinary.com/civoremo/image/upload/v1626818071/web_portfolio/portfolio_default.png",
          project_id: 3,
        },
        {
          image:
            "https://res.cloudinary.com/civoremo/image/upload/v1626818071/web_portfolio/portfolio_default.png",
          project_id: 3,
        },

        {
          image:
            "https://res.cloudinary.com/civoremo/image/upload/v1626818071/web_portfolio/portfolio_default.png",
          project_id: 4,
        },
        {
          image:
            "https://res.cloudinary.com/civoremo/image/upload/v1626818071/web_portfolio/portfolio_default.png",
          project_id: 4,
        },
        {
          image:
            "https://res.cloudinary.com/civoremo/image/upload/v1626818071/web_portfolio/portfolio_default.png",
          project_id: 4,
        },

        {
          image:
            "https://res.cloudinary.com/civoremo/image/upload/v1626818071/web_portfolio/portfolio_default.png",
          project_id: 5,
        },
      ]);
    });
};
