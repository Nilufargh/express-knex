//we need a knex-file.js
//details for connecting to database like hostname,port,password...
//this is also will be using for migration

//TODO in prod, use dependency injection 
//to create knex instance so db access can be mocked

//TODO in prod don't access knexfile.development directly 
//but decide with env vars which config to use
const knex = require('knex');
const knexfile = require('./knexfile');

const db = knex(knexfile.development);
module.exports = db;

