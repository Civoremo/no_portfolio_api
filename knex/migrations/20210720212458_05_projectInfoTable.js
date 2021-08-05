/** @format */

exports.up = function (knex) {
  return knex.schema.createTable("projectInfo", tbl => {
    tbl.increments("id").unsigned();
    tbl.text("description").notNullable().defaultTo("Temp Text ...");
    tbl.text("link");
    tbl
      .integer("project_id")
      .references("id")
      .inTable("projects")
      .unsigned()
      .notNullable()
      .onDelete("CASCADE");
    tbl.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("projectInfo");
};
