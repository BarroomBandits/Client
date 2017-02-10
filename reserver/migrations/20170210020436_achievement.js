
exports.up = function(knex, Promise) {
  return knex.schema.createTable('achievement', function(table){
    table.increments();
    table.text('name');
    table.integer('value');
    table.integer('experience');
    table.text('trophy_url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('achievement');
};
