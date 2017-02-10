
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(table){
    table.increments();
    table.text('users_name');
    table.text('password');
    table.integer('purse');
    table.integer('experience');
    table.integer('level');
    table.text('avatar_url');
    table.integer('pong_games_played');
    table.integer('pong_games_won');
    table.integer('horse_games_played');
    table.integer('horse_games_won');
    table.integer('darts_games_played');
    table.integer('darts_games_won');
    table.integer('pool_games_played');
    table.integer('pool_games_won');
    table.integer('pro_games_played');
    table.integer('pro_games_won');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
