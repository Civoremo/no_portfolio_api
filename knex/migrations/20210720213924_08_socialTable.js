/** @format */

exports.up = function (knex) {
  return knex.schema.createTable("socialMedia", tbl => {
    tbl.increments("id").unsigned();
    tbl.string("platform_title").notNullable();
    tbl
      .text("image")
      .notNullable()
      .default(
        "https://res.cloudinary.com/civoremo/image/upload/v1626818071/web_portfolio/portfolio_default.png"
      );
    tbl.text("link").notNullable();
    tbl
      .integer("contact_id")
      .unsigned()
      .references("id")
      .inTable("contact")
      .notNullable()
      .onDelete("CASCADE");
    tbl.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("socialMedia");
};
