
exports.up = function(knex, Promise) {
  return knex.schema.createTable('game', function(table){
    table.increments();
    table.integer('type');
    table.boolean('p1_winner');
    table.dateTime('time');
    table.integer('p1_score');
    table.float('lat');
    table.float('long');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('game');
};
