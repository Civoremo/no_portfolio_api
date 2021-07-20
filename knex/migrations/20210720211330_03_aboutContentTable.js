/** @format */

exports.up = function (knex) {
  return knex.schema.createTable("aboutContent", tbl => {
    tbl.increments("id").unsigned();
    tbl.text("textContent").notNullable();
    tbl
      .integer("about_id")
      .unsigned()
      .references("id")
      .inTable("about")
      .notNullable()
      .onDelete("CASCADE");
    tbl.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("aboutContent");
};
