/** @format */

exports.up = function (knex) {
  return knex.schema.createTable("about", tbl => {
    tbl.increments("id").unsigned();
    tbl.string("title").unique().notNullable();
    tbl.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("about");
};
