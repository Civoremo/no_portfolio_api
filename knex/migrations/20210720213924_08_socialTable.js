/** @format */

exports.up = function (knex) {
  return knex.schema.createTable("socialMedia", tbl => {
    tbl.increments("id").unsigned();
    tbl.string("platform_title").notNullable();
    tbl.text("image").notNullable();
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
