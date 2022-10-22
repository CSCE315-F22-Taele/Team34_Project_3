/* eslint-disable import/no-import-module-exports */
const Pool = require('pg');
const Credentials = require('./credentials');

const pool = new Pool.Pool({
  user: Credentials.user,
  password: Credentials.password,
  host: Credentials.host,
  port: 5432,
  database: Credentials.database,
});

module.exports = pool;
