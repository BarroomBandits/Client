
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_achievement', function(table){
    table.increments();
    table.integer('users_id').references('users.id').unsigned().onDelete('cascade');
    table.integer('achievement_id').references('achievement.id').unsigned().onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users_achievement');
};
