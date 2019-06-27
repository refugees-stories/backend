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

      tbl.string('author', 255);
      tbl.string('title', 255);
      tbl.blob('image');
      tbl
        .text('body')
        .notNullable();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('stories');
};