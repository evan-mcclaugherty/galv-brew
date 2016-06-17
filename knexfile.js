// Update with your config settings.
require('dotenv').config();

module.exports = {
    development: {
        client: 'pg',
        connection: 'postgres://localhost/galv-brew'
    },
    production: {
        client: 'pg',
        connection: process.evn.DATABASE_URL + '?ssl=true'
    }

};
