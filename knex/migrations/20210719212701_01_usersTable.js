/** @format */

exports.up = function (knex) {
  return knex.schema.createTable("users", tbl => {
    tbl.increments("id").unsigned();
    tbl.string("fName").notNullable();
    tbl.string("lName").notNullable();
    tbl.string("email").notNullable();
    tbl.string("password").notNullable();
    tbl.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
