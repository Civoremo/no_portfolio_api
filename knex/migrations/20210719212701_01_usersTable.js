/** @format */

exports.up = function (knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments("id").unsigned();
    tbl.string("fName").notNullable();
    tbl.string("lName").notNullable();
    tbl.string("email").unique().notNullable();
    tbl.string("password").notNullable();
    tbl.boolean("admin").notNullable().default(false);
    tbl.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
