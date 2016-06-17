var environment = process.env.NODE_ENV || 'development';
var config = require('../knexfile')[environment];
var knex = require('nex')(config);

module.exports = knex;
