/** @format */

exports.up = function (knex) {
  return knex.schema.createTable("projects", tbl => {
    tbl.increments("id").unsigned();
    tbl.string("title").notNullable();
    tbl
      .text("gifImage")
      .notNullable()
      .default(
        "https://res.cloudinary.com/civoremo/image/upload/v1626818071/web_portfolio/portfolio_default.png"
      );
    tbl.text("description").notNullable();
    tbl.text("stack");
    tbl.text("liveLink");
    tbl.text("fronendLink");
    tbl.text("backendLink");
    tbl.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("projects");
};
