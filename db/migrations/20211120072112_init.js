//new changes
exports.up = function(knex) {
    return knex.schema.createTable('person',table => {
        table.increments('id');
        table.string('email').notNullable().unique();
        table.string('first_name').notNullable();
        table.string('last_name').notNullable();
        //created_at and updated_at
        table.timestamps(true,true);

    });
  
};

//rolleback
exports.down = function(knex) {
    return knex.schema.dropTable('person');
  
};
// knex-express git:(master) ✗ npx knex migrate:latest --knexfile db/knexfile.js