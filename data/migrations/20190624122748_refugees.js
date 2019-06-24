exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('users', tbl => {
      tbl.increments();

      tbl
        .string('username', 255)
        .notNullable();
      tbl
        .string('password', 255)
        .notNullable();
    })
    .createTable('stories', tbl => {
      tbl.increments();

      tbl
        .string('name', 255);
      tbl
        .text('story')
        .notNullable();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('stories');
};