
exports.up = function(knex, Promise) {
  return knex.schema.createTable('wager', function(table){
    table.increments();
    table.integer('game_id').references('game.id').unsigned().onDelete('cascade');
    table.integer('amount');
    table.boolean('winner_p1');
  });
};

exports.down = function(knex, Promise) {
  return knex.scehma.dropTableIfExists('wager');
};
