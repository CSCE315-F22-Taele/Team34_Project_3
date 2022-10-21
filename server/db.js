/* eslint-disable import/no-import-module-exports */
import Credentials from './credentials';

const Pool = require('pg').pool;

const pool = new Pool({
  user: Credentials.user,
  password: Credentials.password,
  host: Credentials.host,
  port: 5432,
  database: Credentials.database,
});

module.exports = pool;
