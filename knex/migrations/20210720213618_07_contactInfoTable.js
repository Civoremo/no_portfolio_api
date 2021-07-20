/** @format */

exports.up = function (knex) {
  return knex.schema.createTable("contact", tbl => {
    tbl.increments("id").unsigned();
    tbl.text("location").notNullable();
    tbl.text("email").notNullable();
    tbl.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("contact");
};
