// Update with your config settings.

module.exports = {

  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './dev.sqlite3'
  //   }
  // },

  //TODO we don't hard-code these information instead using env variables
  //staging:

  development: {
    client: 'postgresql',
    connection: {
      database: 'learnknex',
      user:     'niloo',
      password: '1234'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

};
