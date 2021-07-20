/** @format */

exports.up = function (knex) {
  return knex.schema.createTable("projectImage", tbl => {
    tbl.increments("id").unsigned();
    tbl.text("projectImage").notNullable();
    tbl
      .integer("project_id")
      .unsigned()
      .references("id")
      .inTable("projects")
      .notNullable()
      .onDelete("CASCADE");
    tbl.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("projectImage");
};
